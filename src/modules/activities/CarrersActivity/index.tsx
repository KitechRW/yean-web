import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Select from 'react-select';
import joi from 'joi';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Divider } from '@mui/material';

const schema = joi.object({
  keyword: joi.string(),
  category: joi.string(),
  location: joi.string(),
});
const Carrers = ({ data }: any) => {
  const [categories, setCategories] = useState<any>([]);
  const [keywords, setKeywords] = useState<any>([]);
  const [locations, setLocations] = useState<any>([]);

  const [categoryFilter, setCategoryFilter] = useState(null);
  const [keywordFilter, setKeywordFilter] = useState(null);
  const [locationFilter, setLocationFilter] = useState(null);

  const [jobsToShow, setJobsToShow] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  useEffect(() => {
    if (data.rows) {
      const results = data.rows.filter((eachJob: any) => {
        let found = true;
        if (
          categoryFilter &&
          !(eachJob.category === categoryFilter)
        ) {
          found = false;
        }
        if (
          locationFilter &&
          !(eachJob.location === locationFilter)
        ) {
          found = false;
        }
        if (keywordFilter && !(eachJob.keyword === keywordFilter)) {
          found = false;
        }
        return found;
      });
      setJobsToShow(results);
    }
  }, [categoryFilter, data.rows, keywordFilter, locationFilter]);

  useEffect(() => {
    if (data) {
      const keywords = data?.keywords?.map((eachKeyword: any) => {
        return { label: eachKeyword, value: eachKeyword };
      });

      const locations = data?.locations?.map((eachLocation: any) => {
        return { label: eachLocation, value: eachLocation };
      });
      const categories = data?.categories?.map(
        (eachCategory: any) => {
          return { label: eachCategory, value: eachCategory };
        },
      );

      setKeywords(keywords);
      setLocations(locations);
      setCategories(categories);
    }
  }, [data]);

  const onSubmit = async (query: any) => {
    setCategoryFilter(query['category']);
    setLocationFilter(query['location']);
    setKeywordFilter(query['keyword']);
  };
  return (
    <Scaffold>
      <div className="flex-wrap bg-white justify-center items-center w-full p-4 md:p-8 flex gap-4">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-4xl text-dark-green tracking-wide font-black">
            Find your Dream Job
          </h1>
          <p className="mt-2 text-[#767676] max-w-sm">
            We provide online instant cash loans with quick approval
            that suit your term length
          </p>
        </div>
        <Image
          src="/assets/images/carrer.png"
          width="397"
          height="242"
          alt=""
        />

        <form
          onSubmit={event => {
            handleSubmit(onSubmit)(event);
          }}
          className="mt-6 w-full justify-center flex items-center gap-6 flex-wrap"
        >
          <Select
            placeholder={'Keyword'}
            isMulti={false}
            {...register('keyword')}
            options={keywords}
            onChange={(newValue: any) => {
              setValue('keyword', newValue.value);
            }}
          />
          <Select
            placeholder={'Location'}
            isMulti={false}
            {...register('location')}
            options={locations}
            onChange={(newValue: any) => {
              setValue('location', newValue.value);
            }}
          />
          <Select
            placeholder={'Category'}
            isMulti={false}
            {...register('category')}
            options={categories}
            onChange={(newValue: any) => {
              setValue('category', newValue.value);
            }}
          />

          {/*<button className="text-gray-400 rounded-lg py-3 px-12 border border-gray-200 bg-white">*/}
          {/*  Keyword*/}
          {/*</button>*/}

          <button
            type={'submit'}
            className="text-white rounded-lg py-3 px-12 border border-dark-green bg-dark-green"
          >
            Find Job
          </button>
        </form>
      </div>

      <div className="p-4 md:p-8 items-center flex flex-col bg-[#F5F7FA]">
        <h1 className="text-xl md:text-2xl max-w-6xl font-black tracking-wide w-full">
          Our Job Departments
        </h1>
        <div className="flex gap-3 flex-wrap justify-between max-w-6xl w-full">
          <h1 className="text-xl md:text-2xl font-black tracking-wide">
            Available Jobs
          </h1>
          {/*<button className="px-12 py-3 border border-brand-green rounded">*/}
          {/*  Browse More Job*/}
          {/*</button>*/}
        </div>

        {jobsToShow.map((element: any, index) => (
          <>
            <div
              key={element.id}
              className="flex items-start gap-3 mt-4 py-4 px-2 flex-wrap justify-between max-w-6xl w-full hover:bg-white"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <h1 className="text-lg md:text-xl font-light">
                    {element.title}
                  </h1>
                  <button className="rounded-full bg-dark-green text-white px-3 ml-24 py-2">
                    {element.category}
                  </button>
                </div>
                <div className="flex items-center ml-3 gap-3 gap-x-12">
                  <p className="text-dark-green">{element.keyword}</p>
                  <p className="text-gray-400">{element.location}</p>
                </div>
              </div>

              <Link href={'/carrers/' + element.id}>
                <p className="cursor-pointer rounded-lg bg-dark-green text-white px-8 py-3">
                  View more
                </p>
              </Link>
            </div>
            {index < jobsToShow.length-1 && (
              <div className="bg-white w-full h-0.5" />
            )}
          </>
        ))}
      </div>
    </Scaffold>
  );
};

export default Carrers;
