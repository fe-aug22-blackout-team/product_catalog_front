import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.scss';
import { Product } from '../../types/Product';
import { ButtonType } from '../../types/Button';
import { Button } from '../UI/Button';
import { appRoutes } from '../../routes/Routes';
import { LocaleStorageContext } from '../../context/localStorageContext';

interface Props {
  phone: Product;
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const {
    cartItems,
    favItems,
    updateCartItems,
    updateFavItems,
  } = useContext(LocaleStorageContext);

  const isInCart = cartItems.some(item => item.id === phone.id);
  const isFavourite = favItems.some(item => item.id === phone.id);

  const handleAddCart = () => {
    if (!isInCart) {
      const newCartItems = [...cartItems, phone];

      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      updateCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.filter(item => item.id !== phone.id);

      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      updateCartItems(newCartItems);
    }
  };

  const handleAddFav = () => {
    if (!isFavourite) {
      const newFavItems = [...favItems, phone];

      localStorage.setItem('favItems', JSON.stringify(newFavItems));
      updateFavItems(newFavItems);
    } else {
      const newFavItems = favItems.filter(item => item.id !== phone.id);

      localStorage.setItem('favItems', JSON.stringify(newFavItems));
      updateFavItems(newFavItems);
    }
  };

  return (
    <article className='product'>
      <Link to={`${appRoutes.phones}/${phone.phoneId}`}>
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
          <div onClick={() => handleAddFav()}>
            <Button
              buttonType={ButtonType.Favourite}
              isFavourite={isFavourite}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
