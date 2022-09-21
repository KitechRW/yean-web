import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState, useRef, useEffect, useCallback } from 'react';
import CustomImage from '../CustomImage';

interface IItem {
  id: string | number;
  image: string;
  portfolio: string;
  companyName?: string;
}

const PartnersList = ({ data }: { data: IItem[] }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-8 gap-5">
      {data?.map((element, index) => {
        return (
          <a
            key={element.id}
            href={element.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center shrink-0"
          >
            <CustomImage
              src={element.image}
              alt=""
              layout="fixed"
              width="150px"
              height="92px"
            />
            <p className="sr-only">{element.companyName}</p>
          </a>
        );
      })}
    </div>
  );
};

export default PartnersList;
