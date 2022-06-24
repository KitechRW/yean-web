import React from 'react';

const TotalCard = ({ item }: any) => {
  return (
    <div
      className={`rounded-sm rounded-tl-3xl rounded-br-3xl py-6 px-4 flex items-center justify-center space-x-3 md:space-x-4 ${item.bg}`}
    >
      <div className="bg-white p-3 rounded-sm rounded-tl-lg rounded-br-lg">
        <item.icon />
      </div>
      <div className="flex flex-col">
        <p className="flex items-center space-x-2 whitespace-nowrap">
          <span className="text-lg md:text-xl font-black">
            {item.amount}
          </span>
          <span className="text-sm font-bold text-white rounded-sm rounded-tl-lg rounded-br-lg px-2 py-1 bg-brand-blue">
            {item.total > 20 ? '+20' : item.total}
          </span>
        </p>
        <p className="mt-1">{item.desc}</p>
      </div>
    </div>
  );
};

export default TotalCard;
