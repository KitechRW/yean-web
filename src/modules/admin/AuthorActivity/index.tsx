import { Add, Search } from '@mui/icons-material';
import { useOpenFetcher } from 'apis/utils/fetcher';
import React from 'react';
import AddItem from '../_Partials/ManageAuthors/AddItem';
import ViewItem from '../_Partials/ManageAuthors/ViewItem';

const AuthorActivity = () => {
  const [authors, setAuthors] = React.useState<{
    count: number;
    rows: any[];
  }>({ count: 0, rows: [] });
  const {
    data: { data },
    isLoading,
  } = useOpenFetcher(`/api/authors`);

  const [filterValue, setFilterValue] = React.useState('');

  React.useEffect(() => {
    const rows = data?.rows || [];
    if (rows.length) {
      const matchauthors = rows.filter((element: any) => {
        let name = element.firstname;
        if (element.lastname) {
          name += ` ${element.lastname}`;
        }
        return name.toLowerCase().includes(filterValue.toLowerCase());
      });
      setAuthors(prev => ({ ...prev, rows: matchauthors }));
    }
  }, [data, filterValue]);

  React.useEffect(() => {
    const rows = data?.rows || [];
    if (rows.length) {
      setAuthors(prev => ({ ...prev, rows }));
    }
  }, [data]);

  const handleAdd = (item: any) => {
    setAuthors(prev => ({
      ...authors,
      rows: [...prev.rows, item],
    }));
  };

  const handleEdit = (item: any) => {
    const rows = authors.rows.map(row => {
      if (Number(row.id) === Number(item.id)) {
        return item;
      }
      return row;
    });
    setAuthors(prev => ({
      ...prev,
      rows: rows,
    }));
  };

  const handleDelete = (id: any) => {
    setAuthors(prev => ({
      ...prev,
      rows: prev.rows.filter(element => element.id !== id),
    }));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="px-4 md:pl-6 bg-white py-4 flex flex-col flex-grow items-center md:px-8 w-full">
      <div className="space-x-6 md:space-x-12 bg-white flex justify-between w-full">
        <div className="group flex-grow flex items-center relative">
          <Search className="left-2 absolute text-slate-400" />
          <input
            value={filterValue}
            onChange={event => setFilterValue(event.target.value)}
            className="peer focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            placeholder="Filter authors..."
          />
        </div>
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
      </div>
      <ul className="w-full py-4 md:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
        {authors.rows.map((item, index) => {
          return (
            <ViewItem
              key={item?.id}
              data={item}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}

        <AddItem
          handleAdd={item => {
            handleAdd(item);
          }}
        >
          <li className="flex">
            <button className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium p-3">
              <Add className="group-hover:text-blue-500 mb-1 text-slate-400" />
              New Author
            </button>
          </li>
        </AddItem>
      </ul>
    </div>
  );
};

export default AuthorActivity;
