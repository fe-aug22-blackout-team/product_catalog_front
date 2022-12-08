import React, { useCallback, useEffect, useState } from 'react';

import './HomePage.scss';
import { SliderWrapper } from './SliderWrapper';
import { MemoizedPhoneSlider } from './PhonesSlider';
import { MemoizedCategories } from './Categories';
import { Loader } from '../UI/Loader';
import { getNewPhones, getPhonesByDiscount } from '../../api/phones';
import { Phone } from '../../types/Phone';

export const HomePage: React.FC = () => {
  const [newPhones, setNewPhones] = useState<Phone[]>([]);
  const [discountPhones, setDiscountPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const phonesCount = 75;
  const tabletsCount = 0;
  const accessoriesCount = 0;

  const get15newPhones = useCallback(async() => {
    try {
      setIsLoading(true);

      const phonesFromServer = await getNewPhones();

      setNewPhones(phonesFromServer);
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getDiscountPhones = useCallback(async() => {
    try {
      setIsLoading(true);

      const phonesFromServer = await getPhonesByDiscount();

      setDiscountPhones(phonesFromServer);
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    get15newPhones();
    getDiscountPhones();
  }, []);

  return (
    <main className="homePage main-container">
      <h1 className='homePage__title'>
        Welcome to Nice Gadgets store!
      </h1>

      <SliderWrapper />

      {isLoading
        ? <Loader />
        : <MemoizedPhoneSlider
          phones={newPhones}
          title='Brand new models'
          itemWidth={272}
        />
      }

      <MemoizedCategories
        phonesCount={phonesCount}
        tabletCount={tabletsCount}
        accessoriesCount={accessoriesCount}
      />

      {isLoading
        ? <Loader />
        : <MemoizedPhoneSlider
          phones={discountPhones}
          title='Hot prices'
          itemWidth={272}
        />
      }
    </main>
  );
};
