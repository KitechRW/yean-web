import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ExtensionMaterials from 'modules/activities/_Partials/ExtensionMaterials';
import { useProtectedFetcher } from 'apis/utils/fetcher';
import CustomImage from 'modules/_partials/CustomImage';
import { useRouter } from 'next/router';

const ExtensionMaterialsActivity = () => {
  const { push } = useRouter();
  const [current, setCurrent] = React.useState<any>(null);
  const {
    data: { data: subCategories },
  } = useProtectedFetcher('/api/sub-categories');
  const {
    data: { data: categories },
  } = useProtectedFetcher('/api/categories');

  React.useEffect(() => {
    if (!current && categories?.rows?.length) {
      setCurrent(categories.rows[0]);
    }
  }, [categories]);

  const matchSubCategories = subCategories?.rows?.filter(
    (item: any) => item.categoryId == current?.id,
  );

  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[250px]">
        <CustomImage
          src={current?.image}
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex flex-col h-full w-full items-center justify-end p-4 md:p-8 top-0 absolute z-10">
          <h1 className="text-3xl md:text-6xl font-black tracking-wide text-white">
            Extension Materials {current ? `- ${current.name}` : ''}
          </h1>
        </div>
      </div>
      <div className="w-full px-4 bg-white md:px-8 pt-12 border-b border-[#E6E6E6]">
        <div className="px-4 md:px-8 w-full max-w-6xl mx-auto flex items-center space-x-4 overflow-x-auto">
          {categories?.rows?.map((element: any) => (
            <button
              key={element.id}
              onClick={() => setCurrent(element)}
              className={`cursor-pointer text-sm font-medium pb-3 ${
                element.id === current?.id
                  ? 'border-b-2 border-b-[#FCB316]'
                  : ''
              }`}
            >
              {element.name}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full px-4 bg-white md:px-8 py-6">
        <ExtensionMaterials
          data={matchSubCategories}
          onClick={(id, name) => {
            push(
              `/extension-material/${current.id}?cat=${id}&category_name=${current.name}&sub=${name}&material=1`,
            );
          }}
        />
      </div>
    </Scaffold>
  );
};

export default ExtensionMaterialsActivity;
