import React from 'react';
import { useRouter } from 'next/router';
import { Chip, IconButton } from '@mui/material';
import CustomImage from 'modules/_partials/CustomImage';
import AddItem from '../AddItem';
import { Edit } from '@mui/icons-material';
import { useNavbar } from 'modules/contexts/NavbarContext';
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
  const { profile } = useNavbar();
  return (
    <>
      <div className="flex relative flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <CustomImage src={image} width="150" height="150" />
        <div className="relative p-3 flex-grow flex flex-col items-center justify-between gap-y-2">
          <Chip
            variant={status === 'pending' ? 'outlined' : 'filled'}
            label={
              status === 'pending'
                ? 'Pending'
                : status === 'published'
                ? 'Published'
                : 'Draft'
            }
            color={status === 'published' ? 'success' : 'warning'}
            size="small"
            className="absolute top-0 right-0 m-2 z-50"
          />
          <p className="font-semibold pl-2 mt-6">{title}</p>
          <p className="text-gray-500 w-full px-2 mt-2">
            Author:{' '}
            {!data?.author?.firstname && !data?.author?.lastname
              ? data?.author?.email
              : `${data.author.firstname} ${data.author.lastname}`}
          </p>
          {(status !== 'published' ||
            profile?.user?.type !== 'member') && (
            <AddItem
              dataValues={data}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            >
              <IconButton>
                <Edit />
              </IconButton>
            </AddItem>
          )}
        </div>
      </div>
    </>
  );
};
export default ViewItem;
