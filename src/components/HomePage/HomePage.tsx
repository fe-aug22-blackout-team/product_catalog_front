import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { SliderWrapper } from './SliderWrapper';
import './HomePage.scss';
import { MemoizedCategories } from './Categories';
import { getAllSortedPhones } from '../../api/phones';
import { MemoizedPhoneSlider } from './PhonesSlider';
import { Loader } from '../UI/Loader';
import { Phone } from '../../types/Phone';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const phonesCount = phones.length;
  const tabletsCount = 0;
  const accessoriesCount = 0;

  const getAllPhones = useCallback(async() => {
    try {
      setIsLoading(true);

      const phonesFromServer = await getAllSortedPhones('Newest');

      setPhones(phonesFromServer.content);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(`Something went wrong ${error}`);
    }
  }, []);

  useEffect(() => {
    getAllPhones();
  }, []);

  const phonesForHotPricesSlider = useMemo(() => {
    return [...phones].sort((ph1, ph2) => {
      return (ph2.fullPrice - ph2.price) / ph2.fullPrice * 100
        - (ph1.fullPrice - ph1.price) / ph1.fullPrice * 100;
    });
  }, [phones]);

  return (
    <div className="homePage">
      <h1 className='homePage__title'>
        Welcome to Nice Gadgets store!
      </h1>

      <SliderWrapper />

      {isLoading
        ? <Loader />
        : <MemoizedPhoneSlider
          phones={phones.slice(0, 15)}
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
          phones={phonesForHotPricesSlider.slice(0, 15)}
          title='Hot prices'
          itemWidth={272}
        />
      }
    </div>
  );
};
