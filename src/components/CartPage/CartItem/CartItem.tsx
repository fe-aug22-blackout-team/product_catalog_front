import React, { useState } from 'react';
import cn from 'classnames';

import './CartItem.scss';

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
          <a
            className={cn(
              'cart-item--button',
              'cart-item--button--minus',
              { 'cart-item--button--minus--disabled': count <= 1 },
            )}
            onClick={() => setCount(count - 1)}
          >
          </a>
          {count}
          <a
            className="cart-item--button cart-item--button--plus"
            onClick={() => setCount(count + 1)}
          >
          </a>
        </div>
        <span className="cart-item--price">
          { `$ ${price}` }
        </span>
      </div>
    </section>
  );
};
