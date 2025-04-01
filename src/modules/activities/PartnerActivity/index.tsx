import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import PartnersList from 'modules/_partials/PartnersList';
import { useOpenFetcher } from 'apis/utils/fetcher';
import { useRouter } from 'next/router';

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
  const { push } = useRouter();
  const {
    data: { data },
    isLoading,
  } = useOpenFetcher(`/api/partners`);

  const confirmedPartners = data?.rows;

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
        if (response.status === 201 || response.status === 200) {
          reset();
          setSuccessMessage(
            response?.data?.message ||
              'thank you, we will reach to you soon!',
          );
        } else {
          setErrorMessage(
            response?.data?.message ||
              'Something bad happed! try again later ',
          );
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
      <div className="flex flex-col w-full relative bg-brand-green min-h-[312px] md:min-h-[500px]">
        <Image
          src="/assets/images/partner_new.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
        />
        <div className="flex flex-col h-full w-full items-center justify-end p-4 md:p-8 top-0 absolute z-10">
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
        Our Partners
        </h1>
        <PartnersList data={confirmedPartners} />
        <div className="flex flex-col items-center mt-3">
          <p className="">
            We would love to partner with you if you find our work
            interesting. Kindly{' '}
            <button
              type="button"
              onClick={() => {
                push('/contact');
              }}
              className="border-dark-green px-2 py-1 border-2 rounded-full"
            >
              Contact us
            </button>
          </p>
        </div>
      </div>
    </Scaffold>
  );
};

export default PartnerActivity;
