import React from 'react';
import { useRouter } from 'next/router';
import { IconButton } from '@mui/material';
import CustomImage from 'modules/_partials/CustomImage';
import EditCategory, { EditCategoryProps } from '../EditItem';
import { Edit } from '@mui/icons-material';

const ViewItem = ({
  data,
  handleEdit,
  handleDelete,
  parentOptions,
}: {
  data: any;
  handleEdit: (item: any) => void;
  handleDelete: (id: any) => void;
  parentOptions: EditCategoryProps['parentOptions'];
}) => {
  const { name, image } = data || {};
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <CustomImage src={image} width="150" height="150" />
        <div className="p-3 flex-grow flex flex-col items-center justify-between gap-y-2">
          <p className="font-semibold pl-2">{name}</p>
          <EditCategory
            parentOptions={parentOptions}
            dataValues={data}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          >
            <IconButton>
              <Edit />
            </IconButton>
          </EditCategory>
        </div>
      </div>
    </>
  );
};
export default ViewItem;
