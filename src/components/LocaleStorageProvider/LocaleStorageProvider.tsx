import React, { useState, useEffect } from 'react';

import { LocaleStorageContext } from '../../context/localStorageContext';
import { Phone } from '../../types/Phone';

type Props = {
  children: React.ReactNode;
}

export const LocaleStorageProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Phone[]>([]);
  const [favItems, setFavItems] = useState<Phone[]>([]);

  const updateCartItems = (newItems: Phone[]) => {
    setCartItems(newItems);
  };

  const updateFavItems = (newItems: Phone[]) => {
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
