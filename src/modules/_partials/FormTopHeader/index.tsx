import { Close } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react';

const FormTopHeader = ({
  label = 'layout',
  keyDown,
  onToggle,
}: any) => {
  return (
    <>
      <div className="pt-3 flex items-start space-x-3 justify-between w-full">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold">
            New <span className="capitalize">{label}</span>
          </h1>
          <p className="text-sm mt-1">
            Add your <span className="lowercase">{label}</span> and
            necessary information from here
          </p>
        </div>
        <button
          type="button"
          onKeyDown={keyDown}
          onClick={onToggle}
          className="text-brand-blue flex flex-col items-center ml-auto"
        >
          <Close fontSize="large" />
        </button>
      </div>
      <Divider className="mt-2 w-full" />
    </>
  );
};

export default FormTopHeader;
