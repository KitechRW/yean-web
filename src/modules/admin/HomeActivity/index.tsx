import { Add, Edit, Search } from '@mui/icons-material';
import { useOpenFetcher } from 'apis/utils/fetcher';
import React from 'react';
import EditItem from '../_Partials/ManageHomePage/EditItem';
import ViewItem from '../_Partials/ManageHomePage/ViewItem';

const PartnerActivity = () => {
  const [item, setItem] = React.useState<any>({});
  const {
    data: { data },
    isLoading,
  } = useOpenFetcher(`/api/landing/1`);

  const handleAdd = (item: any) => {
    setItem(item);
  };

  const handleEdit = (item: any) => {
    setItem(item);
  };

  const handleDelete = (id: any) => {
    setItem({});
  };

  React.useEffect(() => {
    setItem(data);
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="px-4 md:pl-6 bg-white py-4 flex flex-col flex-grow items-center md:px-8 w-full">
      <div className="space-x-6 md:space-x-12 bg-white flex justify-between w-full">
        {!item ? (
          <EditItem
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            dataValues={item || {}}
          >
            <button className="hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium px-8 py-2 shadow-sm">
              <Add />
              <span>New</span>
            </button>
          </EditItem>
        ) : (
          <EditItem
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            dataValues={item || {}}
          >
            <button className="hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-brand-yellow text-sm font-medium px-8 py-2 shadow-sm">
              <Edit />
              <span>Edit</span>
            </button>
          </EditItem>
        )}
      </div>
      {item ? (
        <ViewItem
          key={item?.id}
          data={item}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : null}
    </div>
  );
};

export default PartnerActivity;
