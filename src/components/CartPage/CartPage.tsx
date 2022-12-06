import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.scss';
import { ButtonType } from '../../types/Button';
import { Phone } from '../../types/Phone';
import { Button } from '../UI/Button';
import { Loader } from '../UI/Loader';
import { CartItem } from './CartItem';
import './CartPage.scss';

export const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Phone[]>([]);
  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cartItems') || '[]'));
  }, []);

  useEffect(() => {
    const price = cartItems.reduce((prev, curr) => (
      prev + (curr.count || 1) * curr.price
    ), 0);

    setFullPrice(price);
  }, [cartItems]);

  return (
    <main className="cart-page main-container">
      <NavLink to='/product_catalog_front/' className="cart-page--back" >
        Back
      </NavLink>
      <h1 className="cart-page--title">Cart</h1>

      <div className="cart-page--content">
        {cartItems.length
          ? <section className="cart-page--list">
            {cartItems.map(item => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  setCartItems={setCartItems}
                />
              );
            })}
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
            <div className="cart-page--button-container">
              <Button buttonType={ ButtonType.Main } innerText="Checkout" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
