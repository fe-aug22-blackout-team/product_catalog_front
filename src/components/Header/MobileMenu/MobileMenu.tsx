import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMenu.scss';

type Props = {
  menuHandler: () => void;
};

export const MobileMenu: React.FC<Props> = ({ menuHandler }) => {
  const navbarLinks = ['home', 'phones', 'tablets', 'accessories'];

  return (
    <div className='mobileMenu'>
      <div className="mobileMenu__top">
        <ul className='mobileMenu__links'>
          {navbarLinks.map((link, index) => (
            <li
              className='mobileMenu__item'
              key={index}
              onClick={menuHandler}
            >
              <NavLink
                to={`/product_catalog_front/${link}`}
                className="mobileMenu__link"
              >
                {link.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="mobileMenu__bottom">
        <div
          className="mobileMenu__favourites"
          onClick={menuHandler}
        >
          <NavLink
            to={'/product_catalog_front/favourites'}
            className="mobileMenu__link"
          >
            <div className="mobileMenu__favourites-logo"></div>
          </NavLink>
        </div>
        <div className="mobileMenu__cart" onClick={menuHandler}>
          <NavLink
            to={'/product_catalog_front/cart'}
            className="mobileMenu__link"
          >
            <div className="mobileMenu__cart-logo"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
