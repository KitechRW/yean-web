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
    <div className="flex flex-wrap justify-center gap-x-3 gap-5 w-full">
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
              alt={element.companyName}
              width="150px"
              height="150px"
              layout="fixed"
              loading="lazy"
              // objectFit="contain"
            />
            <p className="sr-only">{element.companyName}</p>
          </a>
        );
      })}
    </div>
  );
};

export default PartnersList;
