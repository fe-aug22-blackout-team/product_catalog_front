import React, { useState } from 'react';

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
          <button onClick={() => setCount(count - 1)}>
            -
          </button>
          {count}
          <button onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
        <span className="cart-item--price">
          { `$ ${price}` }
        </span>
      </div>
    </section>
  );
};
