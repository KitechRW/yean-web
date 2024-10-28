import Scaffold from 'modules/layouts/Scaffold';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Blogs from '../_Partials/Blogs';
import { Add } from '@mui/icons-material';
import AddItem from '../_Partials/Blogs/AddBlog';
const BlogActivity = ({
  data,
  extension,
}: {
  data: any;
  extension?: any;
}) => {
  const { push, query } = useRouter();
  const material = Number(query.material) || 0;
  const handleClick = (id: any) => {
    push(`/blog/${id}?material=${material}`);
  };
  const handleAdd = (item: any) => {

  }
  return (
    <Scaffold>
      <div className="w-full flex px-4 bg-white md:px-8 pt-12 border-b  border-[#E6E6E6]">
        <div className="px-4 md:px-8 w-full max-w-6xl mx-auto flex items-center space-x-4">
          <Link href={extension ? '/extension-material' : '/blog'}>
            <span className="cursor-pointer text-sm font-medium pb-3 border-b-2 border-b-[#FCB316]">
              {query.category_name ||
                extension?.category_name ||
                'All'}
            </span>
          </Link>
          <span className="cursor-pointer text-sm font-medium pb-3">
            {query.subcategory || extension?.sub || 'Blogs'}
          </span>
        </div>
        <AddItem
          handleAdd={item => {
            handleAdd(item);
          }}
        >
          <button className="hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium px-8 py-2 shadow-sm">
            <Add/>
            <span>New</span>
          </button>
        </AddItem>
      </div>

      <div className="w-full px-4 bg-white md:px-8 py-6">
        <Blogs
          data={data}
          extension={extension}
          onClick={handleClick}
        />
      </div>
    </Scaffold>
  );
};

export default BlogActivity;
