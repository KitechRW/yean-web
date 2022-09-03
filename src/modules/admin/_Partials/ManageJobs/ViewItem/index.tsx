import React from 'react';
import { useRouter } from 'next/router';
import { IconButton } from '@mui/material';
import CustomImage from 'modules/_partials/CustomImage';
import AddItem from '../AddItem';
import { Edit } from '@mui/icons-material';

const ViewJob = ({
                    data,
                    handleEdit,
                    handleDelete,
                  }: {
  data: any;
  handleEdit: (item: any) => void;
  handleDelete: (id: any) => void;
}) => {
  const { title, keyword, category } = data || {};
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h2 className={"self-center"}> {title}</h2>
        <div className="p-3 flex-grow flex flex-col items-center justify-between gap-y-2">
          <p className="font-semibold pl-2">{keyword} , {category}</p>
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
export default ViewJob;
