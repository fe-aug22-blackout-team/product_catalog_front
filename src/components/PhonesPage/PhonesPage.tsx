import React, { useEffect, useState } from 'react';
import './PhonesPage.scss';
import '../../styles/grid-templates.scss';
import { ProductCard } from '../ProductCard';
import {
  getProductsQuantity,
  getSortedProductsByPagination,
} from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Loader } from '../UI/Loader';
import { Pagination } from './Pagination';
import { Dropdown } from './Dropdown';
import { NavString } from '../NavString';
import { appRoutes } from '../../routes/Routes';
import { Categories } from '../../types/Categories';

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
      const phonesFromServer = await getSortedProductsByPagination(
        Categories.PHONES,
        sortBy,
        currentPage,
        phonesPerPage,
      );

      const quantityFromServer = await getProductsQuantity();

      setPhones(phonesFromServer);
      setTotalPhones(quantityFromServer.phonesQuantity);
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
    <div className="phones-page main-container">
      <div className="phones-page__navstring">
        <NavString
          links={[
            { title: 'home', path: appRoutes.home },
            { title: 'Phones', path: appRoutes.phones },
          ]}
        />
      </div>

      <h1 className="phones-page__title">
        Mobile phones
      </h1>

      <span className='phones-page__items-amount'>
        {totalPhones} models
      </span>

      <div className="phones-page__selects">
        <div className="grid">
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
        ? <div className="phones-page__loader">
          <Loader />
        </div>
        : (
          <ul className="phones-page__catalog grid">
            {phones.map(phone => (
              <li key={phone.id} className='phones-page__item' >
                <ProductCard phone={phone} />
              </li>
            ))}
          </ul>
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
