import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { totals } from 'system/static';
import TopItem from '../TopItem';

const TopSelling = () => {
  return (
    <div className="mt-5 md:mt-0 flex-flex-col pl-12">
      <div className="flex items-center space-x-6">
        <h2 className="text-brand-blue font-semibold">
          Top selling products
        </h2>
        <button
          type="button"
          className="text-sm text-brand-blue flex items-center space-x-2"
        >
          <span className="text-xs whitespace-nowrap">See all</span>
          <ChevronRightIcon />
        </button>
      </div>
      <div className="mt-6 flex flex-col space-y-4">
        {totals.map((element, index) => (
          <TopItem
            item={{
              image: '/assets/images/product.png',
              name: 'Tshirt Levis',
              price: 'RWF 49,99',
              count: index + 1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
