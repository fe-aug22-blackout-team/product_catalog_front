import React, { useState, useEffect } from 'react';

import { LocaleStorageContext } from '../../context/localStorageContext';
import { Product } from '../../types/Product';

type Props = {
  children: React.ReactNode;
}

export const LocaleStorageProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [favItems, setFavItems] = useState<Product[]>([]);

  const updateCartItems = (newItems: Product[]) => {
    setCartItems(newItems);
  };

  const updateFavItems = (newItems: Product[]) => {
    setFavItems(newItems);
  };

  useEffect(() => {
    const favItemsFromStorage = localStorage.getItem('favItems');
    const favItemsData = favItemsFromStorage
      ? JSON.parse(favItemsFromStorage)
      : [];

    setFavItems(favItemsData);

    const cartItemsFromStorage = localStorage.getItem('cartItems');
    const cartItemsData = cartItemsFromStorage
      ? JSON.parse(cartItemsFromStorage)
      : [];

    setCartItems(cartItemsData);
  }, []);

  const contextValue = {
    cartItems,
    favItems,
    updateCartItems,
    updateFavItems,
  };

  return (
    <LocaleStorageContext.Provider value={contextValue}>
      {children}
    </LocaleStorageContext.Provider>
  );
};
