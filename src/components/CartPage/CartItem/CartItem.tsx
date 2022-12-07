import React, { useContext, useState } from 'react';

import './CartItem.scss';
import { Button } from '../../UI/Button';
import { ButtonType } from '../../../types/Button';
import { Phone } from '../../../types/Phone';
import { LocaleStorageContext } from '../../../context/localStorageContext';

interface Props {
  item: Phone;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const { image, price } = item;
  const [count, setCount] = useState(item.count || 1);
  const { cartItems, updateCartItems } = useContext(LocaleStorageContext);

  const handleCountChange = (type: string) => {
    if (count > 1 && type === 'minus') {
      setCount(count - 1);
    }

    if (type === 'plus') {
      setCount(count + 1);
    }
  };

  const handleRemove = () => {
    const filteredItems
    = cartItems.filter(storageItem => storageItem.id !== item.id);

    updateCartItems(filteredItems);
  };

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
