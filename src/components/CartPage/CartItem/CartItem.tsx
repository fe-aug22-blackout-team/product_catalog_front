import React, { useEffect, useState } from 'react';

import { Button } from '../../UI/Button';
import './CartItem.scss';
import { ButtonType } from '../../../types/Button';
import { Phone } from '../../../types/Phone';

interface Props {
  item: Phone;
  setCartItems: React.Dispatch<React.SetStateAction<Phone[]>>;
}

export const CartItem: React.FC<Props> = ({ item, setCartItems }) => {
  const { image, price } = item;
  const [count, setCount] = useState(item.count || 1);

  const handleCountChange = (type: string) => {
    if (count > 1 && type === 'minus') {
      setCount(count - 1);
    }

    if (type === 'plus') {
      setCount(count + 1);
    }
  };

  const getItemsFromStorage = () => {
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
  };

  const handleRemove = () => {
    const cartItems: Phone[] = getItemsFromStorage();
    const filteredItems
    = cartItems.filter(storageItem => storageItem.id !== item.id);

    localStorage.setItem('cartItems', JSON.stringify(filteredItems));
    setCartItems(filteredItems);
  };

  useEffect(() => {
    const cartItems: Phone[] = getItemsFromStorage();
    const currentItem
    = cartItems.findIndex(storageItem => storageItem.id === item.id);

    cartItems[currentItem] = { ...item, count };

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartItems(cartItems);
  }, [count]);

  return (
    <section className="cart-item">
      <div className="cart-item--main-part">
        <span
          className="cart-item--remove"
          onClick={() => handleRemove()}
        ></span>
        <div className="cart-item--name-description">
          <img className="cart-item--image" src={image}></img>
          <p className="cart-item--name">
            { item.name }
          </p>
        </div>
      </div>
      <div className="cart-item--secondary-part">
        <div className="cart-item--counter">
          <Button
            buttonType={ButtonType.CartMinus}
            countCartItem={count}
            setCountCartItem={handleCountChange}
          />
          <p className="cart-item--count">
            {count}
          </p>
          <Button
            buttonType={ButtonType.CartPlus}
            countCartItem={count}
            setCountCartItem={handleCountChange}
          />
        </div>
        <span className="cart-item--price">
          { `$ ${price * count}` }
        </span>
      </div>
    </section>
  );
};
