import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import cn from 'classnames';

import './Slider.scss';

type Props = {
  children: React.ReactNode;
}

export const Slider: React.FC<Props> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      const updatedIndex = React.Children.count(children) - 1;

      setActiveIndex(updatedIndex);
    } else if (newIndex >= React.Children.count(children)) {
      setActiveIndex(0);
    } else {
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <>
      <div className="slider__container">
        <button
          className="slider__button"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          {'<'}
        </button>
        <div
          {...swipeHandlers}
          className="slider"
        >
          <div
            className="slider__items-container"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        <button
          className="slider__button"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          {'>'}
        </button>
      </div>

      <div className="slider__indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={cn(
                'slider__indicator',
                { 'slider__indicator-active': index === activeIndex },
              )}
              onClick={() => {
                updateIndex(index);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export const MemoizedSlider = React.memo(Slider);
