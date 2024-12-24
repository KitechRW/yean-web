import CustomImage from 'modules/_partials/CustomImage';
import React from 'react';

const ExtensionMaterials = ({
  data = [{ name: '', image: '', id: 1 }],
  onClick = (id: number, name: string) => {},
}) => {
  console.log(data);
  return (
    <div className="w-full justify-center max-w-6xl mx-auto flex items-center flex-wrap gap-4">
      {data.map((element, index) => (
        <div
          key={element.id}
          role="button"
          tabIndex={index}
          onClick={() => onClick(element.id, element.name)}
          className="flex flex-col border border-[#E6E6E6] ml-10 mb-10 rounded-sm shadow-md px-4 pt-5 pb-7"
        >
          <CustomImage
            src={element.image}
            alt=""
            layout="fixed"
            height={'236px'}
            width={'298px'}
            loading="lazy"
          />
          
          <div className="bottom-0 left-0 right-0 relative flex flex-col items-start w-full">
            <p className="w-full bg-[#FCB316] h-1" />
            <p className="bg-dark-green text-white text-center w-full px-4 py-3">
              {element.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtensionMaterials;
