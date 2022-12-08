import React, { useEffect, useState } from 'react';
import './TabletsPage.scss';
import '../../styles/grid-templates.scss';
import { ProductCard } from '../ProductCard';
import { Loader } from '../UI/Loader';
import { Pagination } from '../Pagination';
import { Dropdown } from '../Dropdown';
import { NavString } from '../NavString';
import { appRoutes } from '../../routes/Routes';
import { Product } from '../../types/Product';
import { getTabletsByPagination } from '../../api/tablets';

export const TabletsPage: React.FC = () => {
  const [tablets, setTablets] = useState<Product[]>([]);
  const [totalTablets, setTotalTablets] = useState(0);
  const [sortBy, setSortBy] = useState('Newest');
  const [tabletsPerPage, setTabletsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadPhones = async() => {
    setIsLoading(true);

    try {
      const tabletsFromServer = await getTabletsByPagination(
        sortBy,
        currentPage,
        tabletsPerPage,
      );

      setTablets(tabletsFromServer.content);
      setTotalTablets(tabletsFromServer.totalTablets);
      setIsLoading(false);
    } catch { }
  };

  const handleSortBy = (item: string) => {
    setSortBy(item);
  };

  const handlePhonesPerPage = (item: number) => {
    setTabletsPerPage(item);
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
  }, [currentPage, tabletsPerPage, sortBy]);

  const sortByOptions = ['Newest', 'Alphabetically', 'Cheapest'];
  const perPageOptions = [8, 16, 32, 64];

  return (
    <div className="tablets-page main-container">
      <div className="tablets-page__navstring">
        <NavString
          links={[
            { title: 'home', path: appRoutes.home },
            { title: 'Tablets', path: appRoutes.tablets },
          ]}
        />
      </div>

      <h1 className="tablets-page__title">
        Tablets
      </h1>

      <span className='tablets-page__items-amount'>
        {totalTablets} models
      </span>

      <div className="tablets-page__selects">
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
              field={tabletsPerPage}
              options={perPageOptions}
              onSelect={handlePhonesPerPage}
            />
          </div>
        </div>
      </div>

      {isLoading
        ? <div className="tablets-page__loader">
          <Loader />
        </div>
        : (
          <ul className="tablets-page__catalog grid">
            {tablets.map(tablet => (
              <li key={tablet.id} className='tablets-page__item' >
                <ProductCard phone={tablet} />
              </li>
            ))}
          </ul>
        )
      }

      <Pagination
        totalProducts={totalTablets}
        productsPerPage={tabletsPerPage}
        onCurrentPage={handleCurrentPage}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        currentPage={currentPage}
      />
    </div>
  );
};
