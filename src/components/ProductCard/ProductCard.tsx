import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.scss';
import { Phone } from '../../types/Phone';
import { ButtonType } from '../../types/Button';
import { Button } from '../UI/Button';
import { appRoutes } from '../../routes/Routes';

interface Props {
  phone: Phone;
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const itemsInCart: Phone[]
    = JSON.parse(localStorage.getItem('cartItems') || '[]');

    setIsInCart(itemsInCart.some(item => item.id === phone.id));
  }, []);

  const handleAddCart = () => {
    const cartItems: Phone[]
    = JSON.parse(localStorage.getItem('cartItems') || '[]');

    if (!isInCart) {
      const newCartItems = [...cartItems, { ...phone, count: 1 }];

      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      setIsInCart(newCartItems.some(item => item.id === phone.id));
    } else {
      const newCartItems = cartItems.filter(item => item.id !== phone.id);

      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      setIsInCart(newCartItems.some(item => item.id === phone.id));
    }
  };

  return (
    <article className='product'>
      <Link to={`${appRoutes.phones}/${phone.id}`}>
        <img
          src={phone.image}
          alt="Product image"
          className="product__img"
        />
      </Link>

      <div className="product__info">
        <h3 className="product__title">
          <Link to={`${appRoutes.phones}/${phone.id}`} className='product__title-link'>
            {phone.name}
          </Link>
        </h3>

        <div className="product__price">
          <p className="product__price-item">
            {phone.price}
          </p>

          <p className="product__price-item product__price-item--crossed">
            {phone.fullPrice}
          </p>
        </div>

        <div className="product__specs">
          <div className="product__specs-item">
            <p className='product__specs-title'>Screen</p>
            <p className='product__specs-value'>{phone.screen}</p>
          </div>

          <div className="product__specs-item">
            <p className='product__specs-title'>Capacity</p>
            <p className='product__specs-value'>{phone.capacity}</p>
          </div>

          <div className="product__specs-item">
            <p className='product__specs-title'>RAM</p>
            <p className='product__specs-value'>{phone.ram}</p>
          </div>
        </div>

        <div className="product__controls">
          <div onClick={() => handleAddCart()}>
            <Button
              buttonType={ButtonType.Main}
              isInCart={isInCart}
              innerText={isInCart
                ? 'Remove from cart'
                : 'Add to cart'}
            />
          </div>
          <div>
            <Button buttonType={ButtonType.Favourite} />
          </div>
        </div>
      </div>
    </article>
  );
};
