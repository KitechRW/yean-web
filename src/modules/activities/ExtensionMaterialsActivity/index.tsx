import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ExtensionMaterials from 'modules/activities/_Partials/ExtensionMaterials';
import { useProtectedFetcher } from 'apis/utils/fetcher';
import CustomImage from 'modules/_partials/CustomImage';
import { useRouter } from 'next/router';

const ExtensionMaterialsActivity = ({
  subCategories,
  categories,
}: {
  categories: any[];
  subCategories: any[];
}) => {
  const { push } = useRouter();

  const [current, setCurrent] = React.useState<any>(categories?.[0]);

  const matchSubCategories = subCategories.filter(
    (item: any) => item.parent_id == current?.id,
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
          {categories.map((element: any) => (
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
          onClick={(id) => {
            push(`/extension-material/${id}`);
          }}
        />
      </div>
    </Scaffold>
  );
};

export default ExtensionMaterialsActivity;
