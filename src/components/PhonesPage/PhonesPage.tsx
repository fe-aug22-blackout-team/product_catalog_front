/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './PhonesPage.scss';
import '../../styles/grid-templates.scss';
import { ProductCard } from '../ProductCard';
import { getPhonesByPagination } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Loader } from '../UI/Loader';
import { Pagination } from './Pagination';
import { Dropdown } from './Dropdown';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [totalPhones, setTotalPhones] = useState(0);
  const [sortBy, setSortBy] = useState('Newest');
  const [phonesPerPage, setPhonesPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadPhones = async() => {
    setIsLoading(true);

    try {
      const phonesFromServer = await getPhonesByPagination(
        sortBy,
        currentPage,
        phonesPerPage,
      );

      setPhones(phonesFromServer.content);
      setTotalPhones(phonesFromServer.totalPhones);
      setIsLoading(false);
    } catch {}
  };

  const handleSortBy = (item: string) => {
    setSortBy(item);
  };

  const handlePhonesPerPage = (item: number) => {
    setPhonesPerPage(item);
    setCurrentPage(1);
  };

  const handleCurrentPage = (numberOfPage: number) => {
    setCurrentPage(numberOfPage);
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(page => page - 1);
    }
  };

  const handleNextPage = (paginationLength: number) => {
    if (currentPage !== paginationLength) {
      setCurrentPage(page => page + 1);
    }
  };

  useEffect(() => {
    loadPhones();
  }, [currentPage, phonesPerPage, sortBy]);

  const sortByOptions = ['Newest', 'Alphabetically', 'Cheapest'];
  const perPageOptions = [8, 16, 32, 64];

  return (
    <div className="phones-page">
      <h1 className="phones-page__title">
        Mobile phones
      </h1>

      <span className='phones-page__items-amount'>
        {totalPhones} models
      </span>

      <div className="phones-page__selects">
        <div className="grid grid--mobile grid--tablet grid--desktop">
          <div className="
            grid__item--mobile-1-2
            grid__item--tablet-1-4
            grid__item--desktop-1-4
          ">
            <Dropdown
              title={'Sort by'}
              field={sortBy}
              options={sortByOptions}
              onSelect={handleSortBy}
            />
          </div>

          <div className="
            grid__item--mobile-3-4
            grid__item--tablet-5-7
            grid__item--desktop-5-7
          ">

            <Dropdown
              title={'Items on page'}
              field={phonesPerPage}
              options={perPageOptions}
              onSelect={handlePhonesPerPage}
            />
          </div>
        </div>
      </div>

      {isLoading
        ? <Loader />
        : (
          <section className="phones-page__catalog">
            {phones.map(phone => (
              <ProductCard key={phone.id} phone={phone} />
            ))}
          </section>
        )
      }

      <Pagination
        totalPhones={totalPhones}
        phonesPerPage={phonesPerPage}
        onCurrentPage={handleCurrentPage}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        currentPage={currentPage}
      />
    </div>
  );
};
