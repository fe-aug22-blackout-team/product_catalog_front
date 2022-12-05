import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.scss';
import { Phone } from '../../types/Phone';
import { ButtonType } from '../../types/Button';
import { Button } from '../UI/Button';

interface Props {
  phone: Phone;
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  return (
    <article className='product'>
      <Link to='/item'>
        <img
          src={phone.image}
          alt="Product image"
          className="product__img"
        />
      </Link>

      <div className="product__info">
        <h3 className="product__title">
          <Link to='/item' className='product__title-link'>
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
          <Button buttonType={ButtonType.Main} innerText='Add to cart'/>
          <Button buttonType={ButtonType.Favourite} />
        </div>
      </div>
    </article>
  );
};