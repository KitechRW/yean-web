import { Call, Email } from '@mui/icons-material';
import Scaffold from 'modules/layouts/Scaffold';
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import social_medias from './social_medias';
import axios from 'axios';

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    message: yup.string().required('Message is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid'),
  })
  .required();

const ContactActivity = () => {
  const [loading, setLoading] = React.useState(false);
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

  const onSubmit = async (data: any) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);
    await axios
      .post('/api/contacts', data)
      .then(response => {
        console.log(response);
        if (response.status === 201 || response.status === 200) {
          reset();
          setSuccessMessage(
            response?.data?.message || 'Thank you for contact us !',
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
    setLoading(false);

    setTimeout(() => {
      setSuccessMessage(null);
      setErrorMessage(null);
    }, 5000);
  };

  return (
    <Scaffold>
      <div
        // onSubmit={event => {
        //   handleSubmit(onSubmit)(event);
        // }}
        className="items-center bg-gradient-to-r from-[#00F0FF]/20 to-white flex-grow h-full flex flex-col p-4 md:p-8"
      >
        {errorMessage ? (
          <div className="mt-3 flex flex-col items-center rounded-lg bg-red-500 px-4 py-3 ">
            <p className="text-white text-sm first-letter:uppercase">
              {errorMessage}
            </p>
          </div>
        ) : null}
        {successMessage ? (
          <div className="mt-3 flex flex-col justify-center items-center rounded-lg bg-green-500 px-4 py-3  self-center">
            <p className="text-white text-sm first-letter:uppercase">
              {successMessage}
            </p>
          </div>
        ) : null}
        <h1 className="text-dark-green text-4xl md:text-6xl font-bold tracking-wide">
          Contact us
        </h1>
        <p className="text-sm text-brand-green mt-1">
          Youth Engagement in Agriculture Network (YEAN)
        </p>

        <div className="mt-6 items-start justify-center inline-grid grid-cols-6 gap-2 md:gap-3">
          <h2 className="font-semibold col-span-2">Head office address:</h2>
          <a
            href="https://goo.gl/maps/CFYpuX8iejp2u9Ps9"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-4"
          >
            KK 3 Rd, Kigali, Gasabo, Rwanda
          </a>

          <h2 className="font-semibold col-span-2">Telephone:</h2>
          <a
            href="tel:+250788845727"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-4"
          >
            +250 788 845 727
          </a>

          <h2 className="font-semibold col-span-2">Email:</h2>
          <p className="col-span-4 flex items-center">
            <a href="mailto:info@yeanrwanda.org">
              info@yeanrwanda.org
            </a>
            ,{' '}
            <a href="mailto:ryeanetwork@gmail.com">
              ryeanetwork@gmail.com
            </a>
          </p>
        </div>

        {/* <div className="mt-6 flex gap-3 justify-between flex-wrap items-center max-w-4xl">
          <div className="flex flex-col gap-3 md:grid grid-cols-2 w-full">
            <div className="w-full flex flex-col">
              <input
                type="text"
                {...register('name')}
                placeholder="Your Name"
                className="rounded-full border border-dark-green py-3 px-4 w-full"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.name?.message}
              </p>
            </div>
            <div className="w-full flex flex-col">
              <input
                type="email"
                {...register('email')}
                placeholder="Your Email Address"
                className="flex-grow rounded-full border border-dark-green py-3 px-4 w-full"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.email?.message}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <textarea
              {...register('message')}
              id=""
              rows={4}
              placeholder="Your Messages..."
              className="resize-none rounded-3xl border border-dark-green py-3 px-4 w-full"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.message?.message}
            </p>
          </div>
        </div> */}
        {/* <button
          type="submit"
          disabled={loading}
          className="disabled:cursor-not-allowed disabled:opacity-25 text-base font-bold border-2 px-12 py-3 tracking-wide rounded-full mt-6 border-dark-green"
        >
          Submit
        </button> */}

        <h1 className="mt-12 font-bold tracking-wide">
          Contact us through our social media pages
        </h1>
        <div className="mt-3 justify-between flex-wrap gap-3 pb-2 max-w-4xl w-full flex items-center border-b border-b-[#8E8E93]">
          <div className="flex items-center space-x-2">
            <p className="font-bold text-gray-500">Contact us:</p>
            <a
              href="tel:+250 788 845 727"
              className="text-sm flex text-gray-500 items-center"
            >
              <span className="text-brand-green ">
                <Call />
              </span>
              <span>+250 788 845 727</span>
            </a>
          </div>
          <a
            href="mailto:info@yeanrwanda.org"
            className="text-sm flex text-gray-500 items-center"
          >
            <Email className="text-brand-green " />
            <span>info@yeanrwanda.org</span>
          </a>
        </div>

        <div className="mt-12 place-content-between flex-wrap gap-3 pb-2 max-w-4xl w-full flex items-center">
          {social_medias.map((element, index) => (
            <a
              key={element.name + index}
              href={element.link || 'https://www.goole.com'}
              target="_blank"
              rel="noopener noreferrer"
              className={
                'hover:opacity-80 flex space-x-2 text-white items-center border rounded-lg px-3 py-2 font-bold ' +
                element.bg_color
              }
            >
              <element.logo />
              <span>{element.name}</span>
            </a>
          ))}
        </div>
      </div>
    </Scaffold>
  );
};

export default ContactActivity;
