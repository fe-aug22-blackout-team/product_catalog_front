import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.scss';
import { Product } from '../../types/Product';
import { ButtonType } from '../../types/Button';
import { Button } from '../UI/Button';
import { LocaleStorageContext } from '../../context/localStorageContext';
import { appRoutes } from '../../routes/Routes';
import cn from 'classnames';

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
  const isDiscount = useMemo(() => {
    return phone?.price !== phone?.fullPrice;
  }, [phone]);

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
      <Link to={`${appRoutes.phones}/${phone.model}?capacity=${phone.capacity}&color=${phone.color}`}>
        <img
          src={phone.image}
          alt="Product image"
          className="product__img"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        />
      </Link>

      <div className="product__info">
        <h3
          className="product__title"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        >
          <Link to={`${appRoutes.phones}/${phone.model}?capacity=${phone.capacity}&color=${phone.color}`} className='product__title-link'>
            {phone.name}
          </Link>
        </h3>

        <div className="product__price">
          {isDiscount && (
            <p className="product__price-item">
              {phone.price}
            </p>
          )}

          <p className={cn('product__price-item', {
            'product__price-item--crossed': isDiscount,
          })}>
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
          <div onClick={handleAddCart}>
            <Button
              buttonType={ButtonType.Main}
              isInCart={isInCart}
              innerText={isInCart
                ? 'Remove from cart'
                : 'Add to cart'}
            />
          </div>
          <div onClick={handleAddFav}>
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
