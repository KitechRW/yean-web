import React from 'react';
import CustomImage from 'modules/_partials/CustomImage';
import AddBlog from '../AddBlog';
import { useOpenFetcher } from 'apis/utils/fetcher';
import { Edit } from '@mui/icons-material';
import ViewBlog from '../ViewArticle';

const BlogItem = ({
  handleAddBlog,
  data,
}: {
  data: any;
  handleAddBlog: (item: any, isEdit: boolean) => void;
}) => {
  const blogTitle: string = data?.title || '';
  const title = blogTitle.slice(0, 50);
  const [currentId, setCurrentId] = React.useState<string | null>(
    null,
  );

  const getEndpoint = React.useCallback(() => {
    if (currentId) {
      return `/api/blogs?id=${currentId}`;
    }
    return '';
  }, [currentId]);
  const { data: dataArticle } = useOpenFetcher(getEndpoint());

  return (
    <>
      <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <CustomImage
          src={data?.image}
          width={'320px'}
          height={'200px'}
          loading="lazy"
          className="rounded-t-lg"
        />

        <div className="p-5 flex flex-col flex-grow justify-between">
          <h6 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
            {title.length < blogTitle.length ? `${title}...` : title}
          </h6>
          <div className="flex w-full justify-between gap-2 items-center mt-auto">
            <AddBlog
              isEdit
              id={data?.id}
              imageUrl={data?.image}
              title={data?.title}
              handleBlog={(item, isEdit) =>
                handleAddBlog(item, isEdit)
              }
            >
              <button className="inline-flex space-x-2 items-center py-2 px-4 text-sm font-semibold text-center text-brand-green bg-brand-yellow/70 rounded-lg hover:bg-brand-yellow focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Edit fontSize="small" />
                <span>Edit</span>
              </button>
            </AddBlog>

            {/* <div
              role="button"
              tabIndex={1}
              onClick={() => setCurrentId(data?.id)}
            >
              <ViewBlog data={dataArticle}>
                <button className="inline-flex space-x-2 items-center py-2 px-4 text-sm font-semibold text-center text-white bg-dark-green/70 rounded-lg hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <Edit fontSize="small" />
                  <span>View</span>
                </button>
              </ViewBlog>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogItem;
