import DefaultApi from 'apis/restful';
import Constants from 'apis/utils/constants';
import { useOpenFetcher } from 'apis/utils/fetcher';
import AccordCustom from 'modules/_partials/AccordCustom';
import React from 'react';
import swal from 'sweetalert';
import AddBlog from '../_Partials/AddBlog';

const AdminBlogsActivity = () => {
  const [rows, setRows] = React.useState<any[]>([]);
  const { data } = useOpenFetcher(
    `${Constants.Endpoints.BLOG_ENDPOINT}`,
  );
  const { articles } = data;

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

  React.useEffect(() => {
    if (articles?.rows) {
      setRows(articles.rows);
    }
  }, [articles?.rows]);
  return (
    <>
      <div className="px-4 py-3 b-white">
        <AddBlog
          onAdd={item => {
            setRows(prev => [...prev, item]);
          }}
        />
      </div>

      <div className="flex flex-col p-4 space-y-2">
        {rows.map((element) => {
          return (
            <AccordCustom
              key={element.id}
              data={element}
              onClick={() => handleDelete(element)}
            />
          );
        })}
      </div>
    </>
  );
};

export default AdminBlogsActivity;
