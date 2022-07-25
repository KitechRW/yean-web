import DefaultApi from 'apis/restful';
import Constants from 'apis/utils/constants';
import { useOpenFetcher } from 'apis/utils/fetcher';
import React from 'react';
import swal from 'sweetalert';
import AddBlog from '../_Partials/ManageBlogs/AddBlog';
import BlogItem from '../_Partials/ManageBlogs/BlogItem';

const AdminBlogsActivity = () => {
  const [rows, setRows] = React.useState<any[]>([]);
  const { data } = useOpenFetcher(
    `${Constants.Endpoints.BLOG_ENDPOINT}`,
  );
  const { articles } = data;

  const [filterValue, setFilterValue] = React.useState('');
  const [blogList, setBlogList] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (data.articles?.rows?.length) {
      const filteredPartner = data.articles?.rows?.filter(
        (element: any) =>
          element.title
            .toLowerCase()
            .includes(filterValue.toLowerCase()),
      );
      setBlogList(filteredPartner);
    }
  }, [data.articles?.rows, filterValue]);

  const handleAddBlog = (item: any, isEdit: boolean) => {
    if (!isEdit) {
      setBlogList(prev => [...prev, item]);
    } else if (isEdit) {
      const updates = blogList.map(element => {
        if (element.id === item.id) {
          return item;
        }
        return element;
      });
      setBlogList(updates);
    }
  };

  React.useEffect(() => {
    if (data.articles?.rows?.length) {
      setBlogList(data.articles.rows);
    }
  }, [data.articles?.rows]);

  const handleDelete = async (item: any) => {
    const willDelete = await swal({
      title: 'Are you sure?',
      text: `Are you sure that you want to delete this article`,
      icon: 'warning',
      dangerMode: true,
    });
    if (willDelete) {
      const { data: deleted } =
        await DefaultApi.DeleteRoute.deleteRoute(
          `${Constants.Endpoints.BLOG_ENDPOINT}/${item?.id}`,
        );
      if (deleted) {
        setRows(rows.filter((row: any) => row.id !== item.id));
      }
    }
  };

  return (
    <>
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Articles</h2>

          <AddBlog
            handleBlog={(item, isEdit) => {
              handleAddBlog(item, isEdit);
            }}
          >
            <button className="hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              New
            </button>
          </AddBlog>
        </div>
        <form className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            value={filterValue}
            onChange={event => setFilterValue(event.target.value)}
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Filter articles..."
          />
        </form>
      </header>
      <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
        {blogList.map((eachPartner, index) => {
          return (
            <BlogItem
              key={eachPartner.id}
              data={eachPartner}
              handleAddBlog={handleAddBlog}
            />
          );
        })}

        <AddBlog
          handleBlog={(item, isEdit) => {
            handleAddBlog(item, isEdit);
          }}
        >
          <li className="flex">
            <button className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
              <svg
                className="group-hover:text-blue-500 mb-1 text-slate-400"
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              New Article
            </button>
          </li>
        </AddBlog>
      </ul>
    </>
  );
};

export default AdminBlogsActivity;
