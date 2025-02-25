import React from 'react';
import { useRouter } from 'next/router';
import { Badge, Chip, IconButton } from '@mui/material';
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
  const parentHashMap = parentOptions.reduce((acc, curr) => {
    acc[curr.value] = curr.label;
    return acc;
  }, {} as Record<string, string>);
  const { name, image } = data || {};
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <CustomImage src={image} width="150" height="150" />
        <div className="p-3 flex-grow flex flex-col items-center justify-between gap-y-2">
          <p className="font-semibold pl-2 flex gap-1 flex-wrap">
            <span>{name}</span>
            {parentHashMap[data.parent_id] && (
              <Chip
                label={parentHashMap[data.parent_id]}
                variant="filled"
                size="small"
              />
            )}
          </p>
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
