import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.scss';
import img from './img/00.png';
import { ButtonType } from '../../types/Button';
import { Button } from '../UI/Button';
import { SmallButton } from '../UI/SmallButton';

const productData = {
  'id': '1',
  'category': 'phones',
  'phoneId': 'apple-iphone-7-32gb-black',
  'itemId': 'apple-iphone-7-32gb-black',
  'name': 'Apple iPhone 7 32GB Black',
  'fullPrice': 400,
  'price': 375,
  'screen': '4.7\' IPS',
  'capacity': '32GB',
  'color': 'black',
  'ram': '2GB',
  'year': 2016,
  'image': 'img/phones/apple-iphone-7/black/00.jpg',
};

export const ProductCard: React.FC = () => {
  const {
    name: productName,
    price,
    fullPrice,
    screen: productScreen,
    capacity,
    ram,
  } = productData;

  return (
    <article className='product'>
      <Link to='/item'>
        <img
          src={img}
          alt="Product image"
          className="product__img"
        />
      </Link>

      <div className="product__info">
        <h3 className="product__title">
          <Link to='/item' className='product__title-link'>
            {productName}
          </Link>
        </h3>

        <div className="product__price">
          <p className="product__price-item">
            {price}
          </p>

          <p className="product__price-item product__price-item--crossed">
            {fullPrice}
          </p>
        </div>

        <div className="product__specs">
          <div className="product__specs-item">
            <p className='product__specs-title'>Screen</p>
            <p className='product__specs-value'>{productScreen}</p>
          </div>

          <div className="product__specs-item">
            <p className='product__specs-title'>Capacity</p>
            <p className='product__specs-value'>{capacity}</p>
          </div>

          <div className="product__specs-item">
            <p className='product__specs-title'>RAM</p>
            <p className='product__specs-value'>{ram}</p>
          </div>
        </div>

        <div className="product__controls">
          <Button type={ButtonType.Main} innerText='Add to cart'/>
          <SmallButton />
        </div>
      </div>
    </article>
  );
};
