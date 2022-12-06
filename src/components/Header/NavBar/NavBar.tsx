import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { appRoutes } from '../../../routes/Routes';
import { navbarLinksContent } from './constants';
import './NavBar.scss';

type Props = {
  isMobileMenu: boolean;
  menuHandler: () => void;
};

export const NavBar: React.FC<Props> = ({ isMobileMenu, menuHandler }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [favItemsCount, setFavItemsCount] = useState(8);

  useEffect(() => {
    let storeCartValue = '';
    let storeFavValue = '';

    const storageListner = setInterval(() => {
      const newCartValue = localStorage.getItem('cartItems');
      const newFavValue = localStorage.getItem('favItems');

      if (newCartValue && storeCartValue !== newCartValue) {
        storeCartValue = newCartValue;

        setCartItemsCount(JSON.parse(storeCartValue).length);
      }

      if (newFavValue && storeFavValue !== newFavValue) {
        storeFavValue = newFavValue;

        setFavItemsCount(JSON.parse(storeFavValue).length);
      }
    }, 1000);

    return () => {
      if (storageListner) {
        clearInterval(storageListner);
      }
    };
  }, []);

  return (
    <div className='navbar'>
      <div className="navbar__left">
        <ul className='navbar__links'>
          <div className='navbar__logo'></div>

          {navbarLinksContent.map(({ id, route, title }) => (
            <li className='navbar__item' key={id}>
              <NavLink
                to={route}
                className={({ isActive }) =>
                  'navbar__link ' + (isActive ? 'is-active' : '')
                }
              >
                {title.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar__right">
        <div className="navbar__favourites">
          <NavLink
            to={appRoutes.favourites}
            className={({ isActive }) =>
              'navbar__link ' + (isActive ? 'is-active' : '')
            }
          >
            <div className="navbar__favourites-logo">
              {favItemsCount > 0 && (
                <div className="navbar__favourites-items-count">
                  {favItemsCount}
                </div>
              )}
            </div>
          </NavLink>
        </div>
        <div className="navbar__cart">
          <NavLink
            to={appRoutes.cart}
            className={({ isActive }) =>
              'navbar__link ' + (isActive ? 'is-active' : '')
            }
          >
            <div className="navbar__cart-logo">
              {cartItemsCount > 0 && (
                <div className="navbar__cart-items-count">
                  {cartItemsCount}
                </div>
              )}
            </div>
          </NavLink>
        </div>

        <div className="navbar__mobileMenu" onClick={menuHandler}>
          {isMobileMenu ? (
            <NavLink
              to={appRoutes.home}
              className={({ isActive }) =>
                'navbar__link ' + (isActive ? 'is-active' : '')
              }
            >
              <div
                className="navbar__mobileMenu-logo navbar__mobileMenu-logo_open"
              />
            </NavLink>
          ) : (
            <NavLink
              to={appRoutes.mobile_menu}
              className={({ isActive }) =>
                'navbar__link ' + (isActive ? 'is-active' : '')
              }
            >
              <div
                className="navbar__mobileMenu-logo navbar__mobileMenu-logo_clos"
              />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
