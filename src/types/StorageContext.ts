import { Product } from './Product';

export type LocStorContextType = {
  favItems: Product[],
  cartItems: Product[],
  updateFavItems: (value: Product[]) => void,
  updateCartItems: (value: Product[]) => void,
};
