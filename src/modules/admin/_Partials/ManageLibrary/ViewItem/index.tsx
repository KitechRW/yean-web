import React from 'react';
import { useRouter } from 'next/router';
import { IconButton } from '@mui/material';
import CustomImage from 'modules/_partials/CustomImage';
import EditItem from '../EditItem';
import { Edit, PictureAsPdf } from '@mui/icons-material';

const ViewItem = ({
  data,
  handleEdit,
  handleDelete,
}: {
  data: any;
  handleEdit: (item: any) => void;
  handleDelete: (id: any) => void;
}) => {
  const { name } = data || {};
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {/* <CustomImage src={image} width="150" height="150" /> */}

        <div className="p-3 flex-grow flex flex-col items-center justify-between gap-y-2">
          <PictureAsPdf className="text-red-500" fontSize="large" />
          <p className="font-semibold pl-2">{name}</p>
          <EditItem
            dataValues={data}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          >
            <IconButton>
              <Edit />
            </IconButton>
          </EditItem>
        </div>
      </div>
    </>
  );
};
export default ViewItem;