import React from 'react';

import { SliderWrapper } from './SliderWrapper';
import './HomePage.scss';
import { Categories } from './Categories';

export const HomePage: React.FC = () => {
  const phonesCount = 0;
  const tabletsCount = 0;
  const accessoriesCount = 0;

  return (
    <div className="homePage">
      <h1 className='homePage__title'>
        Welcome to Nice Gadgets store!
      </h1>

      <SliderWrapper />

      <Categories
        phonesCount={phonesCount}
        tabletCount={tabletsCount}
        accessoriesCount={accessoriesCount}
      />
    </div>
  );
};
