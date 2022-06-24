import React from 'react';
import { orderStatus } from 'system/static';

const OrderStatus = () => {
  return (
    <div className="flex overflow-x-auto lg:flex-wrap gap-x-5 gap-y-2 mt-6">
      {orderStatus.map(element => (
        <div className="flex items-center py-4 px-4 space-x-3 rounded-lg border border-gray-201">
          <div className="flex rounded-full bg-[#FF571B] p-4">
            <div
              className="h-[24px] w-[24px] bg-center bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${element.icon})`,
              }}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="whitespace-nowrap">{element.title}</h4>
            <p className="text-lg">{element.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatus;
