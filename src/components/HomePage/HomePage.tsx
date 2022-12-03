import React from 'react';

import { SliderWrapper } from './SliderWrapper';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <h1 className='homePage__title'>
        Welcome to Nice Gadgets store!
      </h1>

      <SliderWrapper />
    </div>
  );
};
