import React from 'react';
import axios from 'axios';
import type { NextPage } from 'next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { withSessionSsr } from 'system/lib/withSession';
import Secure from 'system/helpers/secureLs';
import isAuth from 'system/helpers/isAuth';
import { useTranslation } from 'react-i18next';
import Logo from 'modules/_partials/Logo';
import Link from 'next/link';

const schema = yup
  .object({
    password: yup.string().required('Password is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid'),
  })
  .required();

const ForgotPassword: NextPage = () => {
  const { t } = useTranslation();
  const { push } = useRouter();
  const [errorMessage, setErrorMessage] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    setErrorMessage(null);
    axios
      .post('/api/reset', data)
      .then(response => {
        const {
          data: { token },
        } = response.data;
        console.log(token);
        Secure.setToken(token);
        push('/bookings');
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
    <div className="bg-top bg-cover bg-no-repeat bg-[url(/assets/images/login.svg)] flex flex-col items-center min-h-screen">
      <div className="flex flex-col bg-black/50 flex-grow w-full items-center justify-center p-4 md:p-8">
        <div className="bg-white flex flex-col w-full md:max-w-md rounded shadow-xl border-t-[0.5px] border-gray-50 justify-center">
          <div className="flex flex-col items-center w-full p-6 py-12 md:px-12">
            <Logo />
            <h1 className="mt-6 text-2xl md:text-3xl font-bold tracking-wide">
              Reset your Password
            </h1>
            {errorMessage ? (
              <div className="mt-3 flex flex-col items-center rounded-lg bg-red-500 px-4 py-3">
                <p className="text-white text-sm first-letter:uppercase">
                  {errorMessage}
                </p>
              </div>
            ) : null}
            <form
              onSubmit={event => {
                handleSubmit(onSubmit)(event);
              }}
              className="w-full flex flex-col mt-6"
            >
              <label htmlFor="user-email" className="flex flex-col">
                <span className="text-black-200 text-sm">Email</span>
                <input
                  id="user-email"
                  type="email"
                  {...register('email')}
                  className="mt-1 focus:border-primary bg-gray-202 outline-none rounded-lg border border-gray-201 px-3 py-2"
                />
                <p className="text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
              </label>
              <button
                type="submit"
                className="mt-6 w-full font-semibold tracking-wide bg-brand-green px-4 py-3 rounded-lg text-white"
              >
                Submit
              </button>
            </form>

            <p className="text-brand-green mt-6">
              <Link href="/login">Back to Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = withSessionSsr(
  async ({ req, res }) => {
    const { user, token } = req.session;

    if (isAuth(token) && user?.roleId === 1) {
      return {
        redirect: {
          permanent: false,
          destination: '/bookings',
        },
      };
    }

    return {
      props: {
        user: user || null,
        token: token || null,
      },
    };
  },
);

export default ForgotPassword;