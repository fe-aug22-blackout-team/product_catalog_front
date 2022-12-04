import React, { useCallback, useEffect, useState } from 'react';

import { SliderWrapper } from './SliderWrapper';
import './HomePage.scss';
import { Categories } from './Categories';
import { getAllSortedPhones } from '../../api/phones';
import { PhonesSlider } from './PhonesSlider';
import { Loader } from '../UI/Loader';

export const HomePage: React.FC = () => {
  const [phonesSortedByYear, setPhonesSortedByYear] = useState([]);
  const [phonesSortedByPrice, setPhonesSortedByPrice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const phonesCount = phonesSortedByYear.length;
  const tabletsCount = 0;
  const accessoriesCount = 0;

  const getPhonesSortedByYear = useCallback(async() => {
    try {
      setIsLoading(true);

      const phonesFromServer = await getAllSortedPhones('Newest');

      setPhonesSortedByYear(phonesFromServer.content);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(`Something went wrong ${error}`);
    }
  }, []);

  const getPhonesSortedByPrice = useCallback(async() => {
    try {
      setIsLoading(true);

      const phonesFromServer = await getAllSortedPhones('Cheapest');

      setPhonesSortedByPrice(phonesFromServer.content);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(`Something went wrong ${error}`);
    }
  }, []);

  useEffect(() => {
    getPhonesSortedByYear();
    getPhonesSortedByPrice();
  }, []);

  return (
    <div className="homePage">
      <h1 className='homePage__title'>
        Welcome to Nice Gadgets store!
      </h1>

      <SliderWrapper />

      {isLoading
        ? <Loader />
        : <PhonesSlider phones={phonesSortedByYear} title='Brand new models' />
      }

      <Categories
        phonesCount={phonesCount}
        tabletCount={tabletsCount}
        accessoriesCount={accessoriesCount}
      />

      {isLoading
        ? <Loader />
        : <PhonesSlider phones={phonesSortedByPrice} title='Hot prices' />
      }
    </div>
  );
};
