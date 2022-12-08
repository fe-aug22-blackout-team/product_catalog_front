import { Phone } from './Phone';

export type LocStorContextType = {
  favItems: Phone[],
  cartItems: Phone[],
  updateFavItems: (value: Phone[]) => void,
  updateCartItems: (value: Phone[]) => void,
};
