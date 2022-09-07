import React, { useEffect } from 'react';
import axios from 'axios';
import type { NextPage } from 'next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Logo from 'modules/_partials/Logo';
import Link from 'next/link';
import MetaData from 'modules/_partials/MetaData';

const schema = yup
  .object({
    password: yup.string().required('No password provided.'),
  })
  .required();

export async function getServerSideProps({ query: { token } }: any) {
  return {
    props: { token: token || null },
  };
}
const RestPassword: NextPage = (props: any) => {
  const { t } = useTranslation();
  const { push } = useRouter();
  useEffect(() => {
    if (!props.token) {
      push('/404').catch(error => console.error(error));
    }
  }, [props.token, push]);

  const [errorMessage, setErrorMessage] = React.useState<
    string | null
  >(null);
  const [message, setMessage] = React.useState<string | null>(null);
  const [submitting, isSubmitting] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: object) => {
    setErrorMessage(null);
    setMessage(null);
    isSubmitting(true);
    axios
      .put('/api/auth/reset-password', {
        ...data,
        token: props.token,
      })
      .then(response => {
        isSubmitting(false);
        console.log(response);
        if (response.status === 201 || response.status === 200) {
          setMessage(
            response?.data?.message ||
              'reset successfully, go to login ',
          );
        } else {
          setErrorMessage('Something went wrong, try again.');
        }
        // setMessage(response.data.)
      })
      .catch(result => {
        isSubmitting(false);
        console.log(result);
        const { error } =
          result.response?.data || result.response || result;
        console.log(error?.message);
        setErrorMessage(
          error?.message || 'Something went wrong, try again',
        );
      });
  };
  return (
    <>
      <title>Yean</title>
      <MetaData />
      <div className="bg-top bg-cover bg-no-repeat bg-[url(/assets/images/login.svg)] flex flex-col items-center min-h-screen">
        <div className="flex flex-col bg-black/50 flex-grow w-full items-center justify-center p-4 md:p-8">
          <div className="bg-white flex flex-col w-full md:max-w-md rounded shadow-xl border-t-[0.5px] border-gray-50 justify-center">
            <div className="flex flex-col items-center w-full p-6 py-12 md:px-12">
              <Logo />
              <h1 className="mt-6 text-2xl md:text-3xl font-bold tracking-wide">
                Set new password
              </h1>

              {errorMessage ? (
                <div className="mt-3 flex flex-col items-center rounded-lg bg-red-500 px-4 py-3">
                  <p className="text-white text-sm first-letter:uppercase">
                    {errorMessage}
                  </p>
                </div>
              ) : null}
              {message ? (
                <div className="mt-3 flex flex-col items-center rounded-lg bg-blue-500 px-4 py-3">
                  <p className="text-white text-sm first-letter:uppercase">
                    {message}
                  </p>
                </div>
              ) : null}

              <form
                onSubmit={event => {
                  handleSubmit(onSubmit)(event);
                }}
                className="w-full flex flex-col mt-6"
              >
                <label
                  htmlFor="user-password"
                  className="flex flex-col"
                >
                  <span className="text-black-200 text-sm">
                    New password
                  </span>
                  <input
                    id="user-password"
                    type="password"
                    {...register('password')}
                    className="mt-1 focus:border-primary bg-gray-202 outline-none rounded-lg border border-gray-201 px-3 py-2"
                  />
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password?.message}
                  </p>
                </label>
                {submitting ? (
                  <button
                    disabled={true}
                    type="submit"
                    className="mt-6 w-full font-semibold tracking-wide bg-brand-green/60 px-4 py-3 rounded-lg text-white"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="mt-6 w-full font-semibold tracking-wide bg-brand-green px-4 py-3 rounded-lg text-white"
                  >
                    Submit
                  </button>
                )}
              </form>

              <p className="text-brand-green mt-6">
                <Link href="/login">Back to Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestPassword;
