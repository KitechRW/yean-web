import React from 'react';

const TopItem = ({ item }: any) => {
  return (
    <div className="flex items-center space-x-3">
      <p>{item.count}</p>
      <div
        className="rounded-lg rounded-tr-sm rounded-bl-sm w-[64px] min-h-[64px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="flex flex-col py-2 justify-center">
        <h4 className="text-brand-blue">{item.name}</h4>
        <p className="font-bold text-brand-blue">{item.price}</p>
      </div>
    </div>
  );
};

export default TopItem;
