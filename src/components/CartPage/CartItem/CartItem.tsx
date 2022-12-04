import React, { useState } from 'react';
import cn from 'classnames';

import { Button } from '../../UI/Button';
import './CartItem.scss';
import { ButtonType } from '../../../types/Button';

interface Props {
  imageUrl: string,
  itemName: string,
  price: number,
  discount: number,
}

export const CartItem: React.FC<Props> = ({
  imageUrl,
  itemName,
  price,
  discount,
}) => {
  const [count, setCount] = useState(1);

  const handleCountChange = (type: string) => {
    if (count > 1 && type === 'minus') {
      setCount(count - 1);
    }

    if (type === 'plus') {
      setCount(count + 1);
    }
  };

  return (
    <section className="cart-item">
      <div className="cart-item--main-part">
        <span className="cart-item--remove"></span>
        <div className="cart-item--name-description">
          <img className="cart-item--image" src={imageUrl}></img>
          <p className="cart-item--name">
            { itemName }
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
          {count}
          <Button
            buttonType={ButtonType.CartPlus}
            countCartItem={count}
            setCountCartItem={handleCountChange}
          />
        </div>
        <span className="cart-item--price">
          { `$ ${price}` }
        </span>
      </div>
    </section>
  );
};
