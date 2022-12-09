import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import '../../App.scss';
import { ButtonType } from '../../types/Button';
import { Button } from '../UI/Button';
import { CartItem } from './CartItem';
import { LocaleStorageContext } from '../../context/localStorageContext';
import './CartPage.scss';
import { appRoutes } from '../../routes/Routes';

export const CartPage: React.FC = () => {
  const [fullPrice, setFullPrice] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();
  const { cartItems, updateCartItems } = useContext(LocaleStorageContext);

  const updateFullPrice = (newPrice: number) => {
    setFullPrice(curr => curr + newPrice);
  };

  useEffect(() => {
    const price = cartItems.reduce((prev, curr) => (
      prev + (curr.count || 1) * curr.price
    ), 0);

    setFullPrice(price);
  }, [cartItems]);

  const handleCheckout = () => {
    if (!isCompleted && cartItems.length) {
      updateCartItems([]);
      localStorage.setItem('cartItems', '[]');
      setIsCompleted(true);

      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  return (
    <main className="cart-page main-container">
      <NavLink to={appRoutes.home} className="cart-page--back" >
        Back
      </NavLink>
      <h1 className="cart-page--title">Cart</h1>

      <div className="cart-page--content">
        {cartItems.length
          ? <section className="cart-page--list">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                updateFullPrice={updateFullPrice}
              />
            ))}
          </section>
          : <h2 className="cart-page--empty">
              There are no items
          </h2>}
        <div className="order-container">
          <section className="cart-page--order">
            <p className="cart-page--price">
              ${fullPrice}
            </p>
            <p className="cart-page--total-items">
              Total for {cartItems.length} items
            </p>
            <div
              className="cart-page--button-container"
              onClick={() => handleCheckout()}
            >
              <Button buttonType={ ButtonType.Main } innerText="Checkout" />
            </div>
          </section>
        </div>
      </div>
      <div className={cn('cart-page--completed', {
        'cart-page--completed--active': isCompleted,
      })}>
        <div className="cart-page--completed-background">
        </div>
        <h2 className="cart-page--completed-message">
          Order completed
        </h2>
      </div>
    </main>
  );
};
