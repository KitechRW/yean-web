import React from 'react';
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
  const { firstname, lastname, profile_image } = data || {};
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <CustomImage src={profile_image} width="150" height="150" />
        <div className="p-3 flex-grow flex flex-col items-center justify-between gap-y-2">
          <p className="font-semibold pl-2">
            {firstname} {lastname}
          </p>
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
