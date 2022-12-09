import React, { useEffect, useState } from 'react';
import './AccessoriesPage.scss';
import '../../styles/grid-templates.scss';
import { ProductCard } from '../ProductCard';
import { Loader } from '../UI/Loader';
import { Pagination } from '../Pagination';
import { Dropdown } from '../Dropdown';
import { NavString } from '../NavString';
import { appRoutes } from '../../routes/Routes';
import { Product } from '../../types/Product';
import { Categories } from '../../types/Categories';
import {
  getProductsQuantity,
  getSortedProductsByPagination,
} from '../../api/phones';

export const AccessoriesPage: React.FC = () => {
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [totalAccessories, setTotalAccessories] = useState(0);
  const [sortBy, setSortBy] = useState('Newest');
  const [accessoriesPerPage, setAccessoriesPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadPhones = async() => {
    setIsLoading(true);

    try {
      const accessoriesFromServer = await getSortedProductsByPagination(
        Categories.ACCESSORIES,
        sortBy,
        currentPage,
        accessoriesPerPage,
      );

      const quantityFromServer = await getProductsQuantity();

      setAccessories(accessoriesFromServer);
      setTotalAccessories(quantityFromServer.accessoriesQuantity);
      setIsLoading(false);
    } catch {}
  };

  const handleSortBy = (item: string) => {
    setSortBy(item);
  };

  const handlePhonesPerPage = (item: number) => {
    setAccessoriesPerPage(item);
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
  }, [currentPage, accessoriesPerPage, sortBy]);

  const sortByOptions = ['Newest', 'Alphabetically', 'Cheapest'];
  const perPageOptions = [8, 16, 32, 64];

  return (
    <div className="accessories-page main-container">
      <div className="accessories-page__navstring">
        <NavString
          links={[
            { title: 'home', path: appRoutes.home },
            { title: 'Accessories', path: appRoutes.accessories },
          ]}
        />
      </div>

      <h1 className="accessories-page__title">
        Accessories
      </h1>

      <span className='accessories-page__items-amount'>
        {totalAccessories} models
      </span>

      <div className="accessories-page__selects">
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
              field={accessoriesPerPage}
              options={perPageOptions}
              onSelect={handlePhonesPerPage}
            />
          </div>
        </div>
      </div>

      {isLoading
        ? <div className="accessories-page__loader">
          <Loader />
        </div>
        : (
          <ul className="accessories-page__catalog grid">
            {accessories.map(accessory => (
              <li key={accessory.id} className='accessories-page__item' >
                <ProductCard phone={accessory} />
              </li>
            ))}
          </ul>
        )
      }

      <Pagination
        totalProducts={totalAccessories}
        productsPerPage={accessoriesPerPage}
        onCurrentPage={handleCurrentPage}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        currentPage={currentPage}
      />
    </div>
  );
};
