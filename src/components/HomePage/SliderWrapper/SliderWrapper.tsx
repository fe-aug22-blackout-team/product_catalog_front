import React from 'react';

import { Slider } from './Slider';
import { SliderItem } from './SliderItem';
import './SliderWrapper.scss';

export const SliderWrapper: React.FC = () => {
  return (
    <Slider>
      <SliderItem>
        <div className="slider-item__1"></div>
      </SliderItem>

      <SliderItem>
        <div className="slider-item__2"></div>
      </SliderItem>

      <SliderItem>
        <div className="slider-item__3"></div>
      </SliderItem>

      <SliderItem>
        <div className="slider-item__4"></div>
      </SliderItem>
    </Slider>
  );
};
