import React from 'react';
import { IconButton } from '@mui/material';
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
  const { name, link } = data || {};
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-3 flex-grow flex flex-col items-center justify-between gap-y-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              link &&
              !link.startsWith('/uploads/') &&
              !link.startsWith('http')
                ? `/uploads/${link}`
                : link
            }
          >
            <PictureAsPdf className="text-red-500" fontSize="large" />
          </a>

          <p className="font-semibold pl-2 w-full text-center">
            {name}
          </p>
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
