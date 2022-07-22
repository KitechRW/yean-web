import React from 'react';

const InputField = ({
  placeholder = 'Title',
  type = 'text',
  register = {},
  error = null,
  className = 'flex flex-col w-full',
}: {
  placeholder: string;
  type?: string;
  register?: any;
  className?: string;
  error?: any;
  value?: string;
}) => {
  return (
    <div className={className}>
      <label className="flex relative w-full">
        <input
          className="peer pt-6 pb-2 focus:border-brand-green focus:pt-6 focus:pb-2 placeholder-shown:py-4 w-full placeholder-transparent focus:outline-none bg-gray-202 outline-none rounded-lg border border-gray-201 px-3"
          placeholder={placeholder}
          type={type}
          {...register}
        />
        <span className="text-gray-800 peer-focus:text-brand-green pt-2 px-3 text-xs peer-focus:pt-2 peer-focus:text-xs  transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:pt-4 absolute">
          {placeholder}
        </span>
      </label>
      {error ? (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      ) : null}
    </div>
  );
};

export default InputField;
