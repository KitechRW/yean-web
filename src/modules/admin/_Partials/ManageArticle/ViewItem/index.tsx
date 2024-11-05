import React from 'react';
import { useRouter } from 'next/router';
import { IconButton } from '@mui/material';
import CustomImage from 'modules/_partials/CustomImage';
import AddItem from '../AddItem';
import { Edit } from '@mui/icons-material';

const ViewItem = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: any;
  handleEdit: (item: any) => void;
  handleDelete: (id: any) => void;
}) => {
  const { title, image, status } = data || {};
  return (
    <>
      <div className="flex relative flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            {
              status === 'submitted' ? 
              (
                <div className='flex absolute top-0 z-30 bg-yellow-500 hover:bg-brand-yellow rounded-md px-3 py-2'>
                  <span className='text-white'>{status}</span> 
                </div>
              )
              :
              (
              <div className='flex absolute top-0 z-30 hover:bg-brand-green bg-brand-green/80 rounded-md px-3 py-2'>
                <span className='text-white'>{status}</span> 
              </div>
              )
            }
       
        <CustomImage src={image} width="150" height="150" />
        <div className="p-3 flex-grow flex flex-col items-center justify-between gap-y-2">
          <p className="font-semibold pl-2">{title}</p>
          <AddItem
            dataValues={data}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          >
            <IconButton>
              <Edit />
            </IconButton>
          </AddItem>
        </div>
      </div>
    </>
  );
};
export default ViewItem;
