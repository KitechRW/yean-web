import React from 'react';
import axios from 'axios';
import type { NextPage } from 'next';
import joi from 'joi';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useRouter } from 'next/router';
import { withSessionSsr } from 'system/lib/withSession';
import Secure from 'system/helpers/secureLs';
import isAuth from 'system/helpers/isAuth';
import { useTranslation } from 'react-i18next';
import Logo from 'modules/_partials/Logo';
import Link from 'next/link';
import { formatJoiErorr } from 'system/format';

const schema = joi
  .object({
    password: joi.string().required(),
    retypePassword: joi.string().required().label('Re-type Password'),
    email: joi
      .string()
      .required()
      .email({ tlds: { allow: false } }),
  })
  .required();

const Signup: NextPage = () => {
  const { t } = useTranslation();
  const { push } = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });
  const onSubmit = async (data: any) => {
    setLoading(true);
    await axios
      .post('/api/auth/signup', data)
      .then(response => {
        const { user, message } = response.data;
        if (user) {
          reset();
          setSuccessMessage(message);
          setTimeout(() => {
            push('/login');
          }, 3000);
        }
      })
      .catch(result => {
        console.log(result);
        const error =
          result.response?.data || result.response || result;
        console.log(error?.message);
        setErrorMessage(
          error?.message || 'Something went wrong, try again',
        );
      });
    setLoading(false);
    setTimeout(() => {
      setErrorMessage(null);
      setSuccessMessage(null);
      setLoading(false);
    }, 5000);
  };
  return (
    <div className="bg-top bg-cover bg-no-repeat bg-[url(/assets/images/login.svg)] flex flex-col items-center min-h-screen">
      <div className="flex flex-col bg-black/50 flex-grow w-full items-center justify-center p-4 md:p-8">
        <div className="bg-white flex flex-col w-full md:max-w-md rounded shadow-xl border-t-[0.5px] border-gray-50 justify-center">
          <div className="flex flex-col items-center w-full p-6 py-12 md:px-12">
            <Logo />
            <h1 className="mt-6 text-2xl md:text-4xl font-bold tracking-wide">
              Signup
            </h1>
            {errorMessage ? (
              <div className="mt-3 flex flex-col items-center rounded-lg bg-red-500 px-4 py-3">
                <p className="text-white text-sm first-letter:uppercase">
                  {errorMessage}
                </p>
              </div>
            ) : null}
            {successMessage ? (
              <div className="mt-3 flex flex-col items-center rounded-lg bg-brand-green px-4 py-3">
                <p className="text-white text-sm first-letter:uppercase">
                  {successMessage}
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
                {errors.email?.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {formatJoiErorr(`${errors.email?.message}`)}
                  </p>
                )}
              </label>
              <label
                htmlFor="user-password"
                className="flex flex-col mt-3"
              >
                <span className="text-black-200 text-sm">
                  Password
                </span>
                <input
                  id="user-password"
                  type="password"
                  {...register('password')}
                  className="mt-1 focus:border-primary bg-gray-202 outline-none rounded-lg border border-gray-201 px-3 py-2"
                />
                {errors.password?.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {formatJoiErorr(`${errors.password?.message}`)}
                  </p>
                )}
              </label>

              <label
                htmlFor="retype-password"
                className="flex flex-col mt-3"
              >
                <span className="text-black-200 text-sm">
                  Re-type Password
                </span>
                <input
                  id="retype-password"
                  type="password"
                  {...register('retypePassword')}
                  onChange={event => {
                    const value = event.target.value;
                    if (value !== getValues('password')) {
                      setError(
                        'retypePassword',
                        {
                          type: 'focus',
                          message: 'Password does not match',
                        },
                        { shouldFocus: true },
                      );
                    } else {
                      setValue('retypePassword', value, {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                    }
                  }}
                  className="mt-1 focus:border-primary bg-gray-202 outline-none rounded-lg border border-gray-201 px-3 py-2"
                />
                {errors.retypePassword?.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {formatJoiErorr(
                      `${errors.retypePassword?.message}`,
                    )}
                  </p>
                )}
              </label>
              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full disabled:cursor-not-allowed font-semibold tracking-wide disabled:bg-brand-green/25 bg-brand-green px-4 py-3 rounded-lg text-white"
              >
                Signup
              </button>
            </form>

            <p className="text-brand-green mt-6">
              <span className="text-gray-800">
                Alredy have an account?{' '}
              </span>
              <Link href="/login">Login</Link>
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

export default Signup;
