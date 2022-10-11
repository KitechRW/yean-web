import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState, useRef, useEffect, useCallback } from 'react';
import CustomImage from '../CustomImage';

interface IItem {
  id: string | number;
  image: string;
  portfolio: string;
  companyName?: string;
}

const CarouselPartners = ({ data }: { data: IItem[] }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >
        maxScrollWidth.current
      );
    }

    return false;
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <=
        maxScrollWidth.current
    ) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft =
        carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, [data]);

  return (
    <div className="relative overflow-hidden w-full py-2">
      <div className="flex items-center justify-between absolute top-0 left-0 w-full h-full">
        <button
          disabled={isDisabled('prev')}
          onClick={movePrev}
          type="button"
          className="z-10 right-0 absolute bg-brand-violet disabled:bg-brand-violet/25 px-2 py-1 text-white"
        >
          <ChevronRight />
        </button>
        <button
          disabled={isDisabled('next')}
          onClick={moveNext}
          type="button"
          className="z-10 left-0 absolute bg-brand-violet disabled:bg-brand-violet/25 px-2 py-1 text-white"
        >
          <ChevronLeft />
        </button>
      </div>
      <div
        ref={carousel}
        className="relative flex gap-3 overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
      >
        {data?.map((element, index) => {
          return (
            <div
              key={element.id}
              className="flex shrink-0 flex-col group relative snap-start"
            >
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
                  height="150px"
                />
                <p className="sr-only">{element.companyName}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselPartners;
