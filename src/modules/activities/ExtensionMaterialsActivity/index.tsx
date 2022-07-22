import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import ExtensionMaterials from "modules/activities/_Partials/ExtensionMaterials";

const ExtensionMaterialsActivity = () => {
  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[250px]">
        <Image
          src="/assets/images/extension-materials.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex flex-col h-full w-full items-center justify-end p-4 md:p-8 top-0 absolute z-10">
          <h1 className="text-3xl md:text-6xl font-black tracking-wide text-white">
            Extension Materials - Livestock Farming
          </h1>
        </div>
      </div>
      <div className="w-full px-4 bg-white md:px-8 pt-12 border-b border-[#E6E6E6]">
        <div className="px-4 md:px-8 w-full max-w-6xl mx-auto flex items-center space-x-4">
          <Link href="/blog">
            <span className="cursor-pointer text-sm font-medium pb-3 border-b-2 border-b-[#FCB316]">
              Amatungo
            </span>
          </Link>
          <Link href="/extension-material/items">
            <span className="cursor-pointer text-sm font-medium pb-3">Ibihingwa</span>
          </Link>
        </div>
      </div>

      <div className="w-full px-4 bg-white md:px-8 py-6">
        <ExtensionMaterials />
      </div>
    </Scaffold>
  );
};

export default ExtensionMaterialsActivity;
