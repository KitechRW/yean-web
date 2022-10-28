import { Add, Search } from '@mui/icons-material';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useOpenFetcher } from 'apis/utils/fetcher';
import Pagination from 'modules/_partials/Pagination';
import React from 'react';
import AddItem from '../_Partials/ManageArticle/AddItem';
import ViewItem from '../_Partials/ManageArticle/ViewItem';

const ArticleActivity = () => {
  const topRef = React.useRef(null);
  const [material, setMaterial] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [articles, setArticles] = React.useState<{
    count: number;
    rows: any[];
  }>({ count: 0, rows: [] });
  const {
    data: { data, pagination },
    isLoading,
  } = useOpenFetcher(
    `/api/articles?material=${
      material ? 1 : 0
    }&page=${pageNumber}&limit=20`,
  );
  console.log(material);

  const [filterValue, setFilterValue] = React.useState('');

  React.useEffect(() => {
    const rows = data || [];
    if (rows.length) {
      const matcharticles = rows.filter((element: any) =>
        element.title
          ?.toLowerCase()
          ?.includes(filterValue.toLowerCase()),
      );
      setArticles(prev => ({ ...prev, rows: matcharticles }));
    }
  }, [data, filterValue]);

  React.useEffect(() => {
    const rows = data?.rows || [];
    if (rows.length) {
      setArticles(prev => ({ ...prev, rows }));
    }
  }, [data]);

  const handleAdd = (item: any, notBlog = false) => {
    setArticles(prev => ({
      ...articles,
      rows: [item, ...prev.rows],
    }));
    setMaterial(notBlog);
  };

  const handleEdit = (item: any, notBlog = false) => {
    const rows = articles.rows.map(row => {
      if (Number(row.id) === Number(item.id)) {
        return item;
      }
      return row;
    });
    setArticles(prev => ({
      ...prev,
      rows: rows,
    }));
    setMaterial(notBlog);
  };

  const handleDelete = (id: any) => {
    setArticles(prev => ({
      ...prev,
      rows: prev.rows.filter(element => element.id !== id),
    }));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div
      ref={topRef}
      className="px-4 md:pl-6 bg-white py-4 flex flex-col flex-grow items-center md:px-8 w-full"
    >
      <div className="space-x-6 md:space-x-12 bg-white flex flex-wrap md:flex-nowrap gap-2 justify-between w-full">
        <div className="group flex-grow flex items-center relative">
          <Search className="left-2 absolute text-slate-400" />
          <input
            value={filterValue}
            onChange={event => setFilterValue(event.target.value)}
            className="peer focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            placeholder="Filter articles..."
          />
        </div>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="blog"
          name="radio-buttons-group"
          row
          onChange={event => {
            setMaterial(event.target.value === 'material');
          }}
        >
          <FormControlLabel
            value="blog"
            control={<Radio checked={material === false} />}
            label="Blog"
          />
          <FormControlLabel
            value="material"
            control={<Radio checked={material === true} />}
            label="Material"
          />
        </RadioGroup>
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
        {articles.rows.map((item, index) => {
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
              New Article
            </button>
          </li>
        </AddItem>
      </ul>

      <Pagination
        pageCount={pagination?.pageCount}
        currentPage={pagination?.currentPage}
        setPageNumber={(page: number) => {
          setPageNumber(page);
          // @ts-ignore
          topRef.current.scrollIntoView();
        }}
      />
    </div>
  );
};

export default ArticleActivity;
