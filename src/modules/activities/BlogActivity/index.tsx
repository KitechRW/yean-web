import Scaffold from 'modules/layouts/Scaffold';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Blogs from '../_Partials/Blogs';

const BlogActivity = ({
  data,
  extension,
}: {
  data: any;
  extension?: any;
}) => {
  const { push } = useRouter();
  const handleClick = (id: any) => {
    push(`/blog/${id}`);
  };
  const firstCategory = extension ? data?.data?.[0]?.category : null;
  return (
    <Scaffold>
      {firstCategory && (
        <div className="w-full px-4 bg-white md:px-8 pt-12 border-b  border-[#E6E6E6]">
          <div className="px-4 md:px-8 w-full max-w-6xl mx-auto flex items-center space-x-4">
            <Link
              href={firstCategory ? '/extension-material' : '/blog'}
            >
              <span className="cursor-pointer text-sm font-medium pb-3">
                {firstCategory?.parent?.name || 'All'}
              </span>
            </Link>
            <span className="cursor-pointer text-sm font-medium pb-3 border-b-2 border-b-[#FCB316]">
              {firstCategory?.name || 'Blogs'}
            </span>
          </div>
        </div>
      )}

      <div className="w-full px-4 bg-white md:px-8 py-6">
        <Blogs
          data={data?.data || []}
          extension={extension}
          onClick={handleClick}
        />
      </div>
    </Scaffold>
  );
};

export default BlogActivity;
