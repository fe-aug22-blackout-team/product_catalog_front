import { createContext } from 'react';

import { LocStorContextType } from '../types/StorageContext';

export const LocaleStorageContext = createContext<LocStorContextType>({
  favItems: [],
  cartItems: [],
  updateFavItems: () => ({}),
  updateCartItems: () => ({}),
});
