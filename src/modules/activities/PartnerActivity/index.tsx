import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import React from 'react';
import Partners from '../_Partials/Library/Partners';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const schema = yup
  .object({
    companyName: yup.string().required('Company Name is required'),
    phone: yup.string().required('Phone Number is required'),
    address: yup.string().required('Address is required'),
    message: yup.string().required('Message is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid'),
  })
  .required();
const PartnerActivity = () => {
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    axios
      .post('/api/partners/request', data)
      .then(response => {
        console.log(response);
        if(response.status === 201 || response.status === 200){
          reset();
          setSuccessMessage(response?.data?.message || "thank you, we will reach to you soon!");
        
        }else {
          setErrorMessage(response?.data?.message || "Something bad happed! try again later ");
        }
      })
      .catch(result => {
        const { error } =
          result.response?.data || result.response || result;
        console.log(error?.message);
        setErrorMessage(
          error?.message || 'Something went wrong, try again',
        );
      });
  };



  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[312px]">
        <Image
          src="/assets/images/partner.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex flex-col h-full w-full items-center justify-center p-4 md:p-8 top-0 absolute z-10">
          <h1 className="text-3xl md:text-6xl font-black tracking-wide text-white">
            Partner with us
          </h1>
        </div>
      </div>

      <div className="p-4 flex flex-col items-center py-12 text-justify bg-gradient-to-r from-cyan-01 to-[#016648]">
        <p className="max-w-4xl">
          We cannot just do it alone. We collaborate with governments,
          companies, nonprofits and other organizations to find
          solutions and contribute to agriculture advancement. We
          appreciate our partner’s contribution that help mainly in
          strengthening our capacity to build stronger and resilient
          communities. Join us, contribute to agriculture development,
          and create jobs and wealth for youth and the community.
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-01 to-white p-4 md:p-8 justify-center gap-6 flex md:gap-x-10 flex-wrap w-full">
        <h1 className="text-3xl font-black text-dark-green tracking-wide w-full text-center">
          Our Partnets
        </h1>
        <Partners />
        <form onSubmit={event => {handleSubmit(onSubmit)(event);
              }}
         className="items-center to-white flex-grow h-full flex flex-col p-4 md:p-8">
          <h1 className="text-dark-green text-4xl md:text-6xl font-bold tracking-wide">
            Become our Partners
          </h1>
          <p className="text-sm text-brand-green mt-1">
            Please fill out , we will reach out ASAP
          </p>
          {errorMessage ? (
              <div className="mt-3 flex flex-col items-center rounded-lg bg-red-500 px-4 py-3 max-w-4xl">
                <p className="text-white text-sm first-letter:uppercase">
                  {errorMessage}
                </p>
              </div>
            ) : null}
       {successMessage ? (
              <div className="mt-3 flex flex-col items-center rounded-lg bg-green-500 px-4 py-3 w-full max-w-4xl self-center">
                <p className="text-white text-sm first-letter:uppercase">
                  {successMessage}
                </p>
              </div>
            ) : null}

          <div className="mt-6 inline-grid gap-4 justify-center sm:grid-cols-2 items-center w-full max-w-4xl">
            <div className='w-full'>
            <input
              type="text"
              {...register('companyName')}
              placeholder="Company Name / Organisation"
              className="rounded-full border border-dark-green py-4 px-4 w-full"
            />
            <p className="text-red-500 text-xs mt-1">
                  {errors.name?.message}
                </p>
            </div>
            <div className='flex-grow w-full'>
            <input
              type="email"
              {...register('email')}
              placeholder="Your Email Address"
              className="rounded-full border border-dark-green py-4 px-4 w-full"
            />
            <p className="text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
            </div>
            <div className='flex-grow w-full'>

            <input
              type="tel"
              {...register('phone')}
              placeholder="Phone number"
              className="rounded-full border border-dark-green py-4 px-4 w-full"
            />
            <p className="text-red-500 text-xs mt-1">
                  {errors.phone?.message}
                </p>
            </div>
            <div className='flex-grow w-full'>
            <input
              type="text"
              {...register('address')}
              placeholder="Address"
              className=" rounded-full border border-dark-green py-4 px-4 w-full"
            />
            <p className="text-red-500 text-xs mt-1">
                  {errors.address?.message}
                </p>
            </div>
            <div className='sm:col-span-2 w-full resize-none'>
            <textarea
              id=""
              {...register('message')}
              rows={5}
              placeholder="Please Describe about your Organisation or Company..."
              className="w-full sm:col-span-2 resize-none rounded-3xl border border-dark-green py-4 px-4"
            />
            <p className="text-red-500 text-xs mt-1">
                  {errors.address?.message}
                </p>
            </div>
          </div>
          <button className="text-base font-bold border-2 px-12 py-4 tracking-wide rounded-full mt-6 border-dark-green">
            Submit
          </button>
        </form>
      </div>
    </Scaffold>
  );
};

export default PartnerActivity;
