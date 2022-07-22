import { Divider } from '@mui/material';
import React from 'react';

const FormBottomActions = ({
  onCancel = (param: boolean) => {},
  label = 'Add',
}) => {
  const handleCancel = () => {
    onCancel(false);
  };
  return (
    <div className="flex flex-col flex-grow mt-4 w-full">
      <div className="inline-grid grid-cols-2 gap-x-3 md:gap-x-6 mt-auto pt-6">
        <button
          type="button"
          onClick={handleCancel}
          className="rounded-lg px-4 py-3 bg-[#E5E7EB] text-brand-red"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg px-4 py-3 bg-brand-green text-white"
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export default FormBottomActions;
