import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import './CartItem.scss';
import { Button } from '../../UI/Button';
import { ButtonType } from '../../../types/Button';
import { Product } from '../../../types/Product';
import { LocaleStorageContext } from '../../../context/localStorageContext';
import { appRoutes } from '../../../routes/Routes';

interface Props {
  item: Product;
  updateFullPrice: (newPrice: number) => void;
}

export const CartItem: React.FC<Props> = ({ item, updateFullPrice }) => {
  const { image, price } = item;
  const [count, setCount] = useState(item.count || 1);
  const { cartItems, updateCartItems } = useContext(LocaleStorageContext);

  const handleCountChange = (type: string) => {
    if (count > 1 && type === 'minus') {
      updateFullPrice(-price);
      setCount(count - 1);
    }

    if (type === 'plus') {
      updateFullPrice(price);
      setCount(count + 1);
    }
  };

  const handleRemove = () => {
    const filteredItems
    = cartItems.filter(storageItem => storageItem.id !== item.id);

    localStorage.setItem('cartItems', JSON.stringify(filteredItems));
    updateCartItems(filteredItems);
  };

  return (
    <section className="cart-item">
      <div className="cart-item--main-part">
        <span
          className="cart-item--remove"
          onClick={() => handleRemove()}
        ></span>
        <Link
          to={`${appRoutes.phones}/${item.phoneId}`}
          style={{ textDecoration: 'none' }}
        >
          <div className="cart-item--name-description">
            <img className="cart-item--image" src={image}></img>
            <p className="cart-item--name">
              { item.name }
            </p>
          </div>
        </Link>
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
