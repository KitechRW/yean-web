import { Add, Search } from '@mui/icons-material';
import { useOpenFetcher } from 'apis/utils/fetcher';
import DataWidget from 'modules/layouts/DataWidget';
import React from 'react';
import AddItem from '../_Partials/ManageInnovation/AddItem';
import ViewItem from '../_Partials/ManageInnovation/ViewItem';

const InnovationActivity = () => {
  const [innovations, setData] = React.useState<any[]>([]);
  const {
    data: { data },
    isLoading,
    isError,
  } = useOpenFetcher(`/api/innovations`);

  const [filterValue, setFilterValue] = React.useState('');

  React.useEffect(() => {
    if (data?.length) {
      setData(data);
    }
  }, [data]);

  const handleAdd = (item: any) => {
    setData(prev => [item, ...prev]);
  };

  const handleEdit = (item: any) => {
    setData(prev =>
      prev.map(row => {
        if (Number(row.id) === Number(item.id)) {
          return item;
        }
        return row;
      }),
    );
  };

  const handleDelete = (id: any) => {
    setData(prev => prev.filter(element => element.id !== id));
  };

  const matchinnovations = innovations.filter((element: any) => {
    if (filterValue.length) {
      return element.text.toLowerCase().includes(filterValue);
    }
    return true;
  });

  return (
    <DataWidget isLoading={isLoading} isError={isError}>
      <div className="px-4 md:pl-6 bg-white py-4 flex flex-col flex-grow items-center md:px-8 w-full">
        <div className="space-x-6 md:space-x-12 bg-white flex justify-between w-full">
          <div className="group flex-grow flex items-center relative">
            <Search className="left-2 absolute text-slate-400" />
            <input
              onChange={event =>
                setFilterValue(event.target.value.toLocaleLowerCase())
              }
              className="peer focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
              type="text"
              placeholder="Filter innovations..."
            />
          </div>
          {innovations.length <= 0 ? (
            <AddItem
              handleAdd={item => {
                handleAdd(item);
              }}
            >
              <button className="hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium px-8 py-2 shadow-sm">
                <Add />
                <span>New</span>
              </button>
            </AddItem>
          ) : null}
        </div>
        <ul className="w-full py-4 md:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
          {matchinnovations.map((item, index) => {
            return (
              <ViewItem
                key={item?.id}
                data={item}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </div>
    </DataWidget>
  );
};

export default InnovationActivity;
