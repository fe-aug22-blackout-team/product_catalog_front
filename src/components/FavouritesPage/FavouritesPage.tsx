import React, { useContext } from 'react';
import { LocaleStorageContext } from '../../context/localStorageContext';
import { ProductCard } from '../ProductCard';
import './FavouritesPage.scss';

export const FavouritesPage: React.FC = () => {
  const { favItems } = useContext(LocaleStorageContext);

  return (
    <main className="fav-page main-container">
      <h1 className="fav-page--title">Favourites</h1>
      <p className="fav-page--total-items">
        {favItems.length} items
      </p>

      {favItems.length
        ? <div className="fav-page--items-list">
          {favItems.map(item => (
            <div className="fav-page--item-container" key={item.id}>
              <ProductCard phone={item} />
            </div>
          ))}
        </div>
        : <h2 className="fav-page--empty">
          There are no items
        </h2>
      }
    </main>
  );
};
