import React, { useCallback, useEffect, useState } from 'react';

import './HomePage.scss';
import { SliderWrapper } from './SliderWrapper';
import { MemoizedPhoneSlider } from './PhonesSlider';
import { MemoizedCategories } from './Categories';
import { Loader } from '../UI/Loader';
import { Product } from '../../types/Product';
import { getNewProducts, getProductsByDiscount } from '../../api/phones';

export const HomePage: React.FC = () => {
  const [newPhones, setNewPhones] = useState<Product[]>([]);
  const [discountPhones, setDiscountPhones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const get15newPhones = useCallback(async() => {
    try {
      setIsLoading(true);

      const phonesFromServer = await getNewProducts();

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

      const phonesFromServer = await getProductsByDiscount();

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

      <MemoizedCategories />

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
