import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.scss';
import { Button } from '../Button';
import { Loader } from '../Loader';
import { CartItem } from './CartItem';
import './CartPage.scss';

export const CartPage: React.FC = () => {
  // for test
  interface Test {
    age: number,
    type: string,
    id: string,
    imageUrl: string,
    name: string,
    snippet: string,
    price: number,
    discount: number,
    screen: string,
    capacity: string,
    ram: string,
    carrier?: string,
  }

  const phonesForTEST: Test[] = [
    {
      'age': 11,
      'type': 'phone',
      'id': 'droid-pro-by-motorola',
      'imageUrl': 'https://i.stack.imgur.com/B0Wfy.jpg?s=64&g=1',
      'name': 'DROID™ Pro by Motorola',
      'snippet': 'The next generation of DOES.',
      'price': 740,
      'discount': 10,
      'screen': '3.1 inches',
      'capacity': '2048MB',
      'ram': '512MB',
    },
    {
      'age': 12,
      'type': 'phone',
      'id': 'motorola-bravo-with-motoblur',
      'imageUrl': 'https://i.stack.imgur.com/B0Wfy.jpg?s=64&g=1',
      'name': 'MOTOROLA BRAVO™ with MOTOBLUR™',
      'snippet': 'An experience to cheer about.',
      'price': 250,
      'discount': 0,
      'screen': '3.7 inches',
      'capacity': '2000MB',
      'ram': '512MB',
    },
    {
      'age': 13,
      'type': 'phone',
      'carrier': 'T-Mobile',
      'id': 'motorola-defy-with-motoblur',
      'imageUrl': 'https://i.stack.imgur.com/B0Wfy.jpg?s=64&g=1',
      'name': 'Motorola DEFY™ with MOTOBLUR™',
      'snippet': 'Are you ready for everything life throws your way?',
      'price': 920,
      'discount': 20,
      'screen': '3.7 inches',
      'capacity': '2000MB',
      'ram': '512MB',
    },
  ];

  //  for test
  const [cartItems, setCartItems] = useState<Test[]>(phonesForTEST);
  const fullPrice = 26;

  return (
    <main className="cart-page">
      <NavLink to='/product_catalog_front/' className="cart-page--back" >
        Back
      </NavLink>
      <h1 className="cart-page--title">Cart</h1>

      <div className="cart-page--content">
        {cartItems.length
          ? <section className="cart-page--list">
            {cartItems.map(item => {
              const { id, imageUrl, snippet, price, discount } = item;

              return (
                <CartItem
                  key={id}
                  itemName={item.name}
                  imageUrl={imageUrl}
                  price={price}
                  discount={discount}
                />
              );
            })}
          </section>
          : <Loader />}
        <div className="order-container">
          <section className="cart-page--order">
            <p className="cart-page--price">
              ${fullPrice}
            </p>
            <p className="cart-page--total-items">
              Total for {cartItems.length} items
            </p>
            <div className="cart-page--button-container">
              <Button innerText="Checkout" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
