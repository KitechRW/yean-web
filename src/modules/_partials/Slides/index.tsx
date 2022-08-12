import { useState, useRef, useEffect, useCallback } from 'react';
import SlideItem from '../SlideItem';

const Slides = ({
  data = [],
}: {
  data: any[];
}) => {
  const lastIndex = data.length - 1;
  const [hovered, setHovered] = useState(false);
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    } else {
      setCurrentIndex(prevState => prevState + lastIndex);
    }
  };

  const moveNext = useCallback(() => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <=
        maxScrollWidth.current &&
      currentIndex < lastIndex
    ) {
      setCurrentIndex(prevState => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, lastIndex]);

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
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // if (!hovered) {
      //   moveNext();
      // }
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [hovered, data, currentIndex]);

  if (!data.length) {
    return null;
  }

  return (
    <div
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
      className={`w-full relative overflow-hidden flex flex-col bg-brand-green`}
    >
      <div className="bottom-2 z-10 justify-center absolute flex items-center space-x-2 w-full">
        {data.map((resource, index) => (
          <div
            role="button"
            tabIndex={index}
            onClick={() => setCurrentIndex(index)}
            key={resource.id}
            className={`w-[22px] h-[3px] z-20 rounded ${
              currentIndex === index
                ? 'bg-brand-yellow'
                : 'bg-[#E2E5F1]'
            }`}
          />
        ))}
      </div>
      <div
        ref={carousel}
        className="flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory md:touch-pan-x z-0"
      >
        {data.map((resource, index) => {
          return (
            <SlideItem
              key={`slide_${data.indexOf(resource)}`}
              data={resource}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slides;
