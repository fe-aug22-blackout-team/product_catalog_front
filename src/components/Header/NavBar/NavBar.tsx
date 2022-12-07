import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LocaleStorageContext } from '../../../context/localStorageContext';

import { appRoutes } from '../../../routes/Routes';
import { MenuBurger } from '../MenuBurger';
import { navbarLinksContent } from './constants';
import './NavBar.scss';

export const NavBar: React.FC = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { cartItems, favItems } = useContext(LocaleStorageContext);

  const menuHandler = () => setIsBurgerMenuOpen(current => !current);

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
              {favItems.length > 0 && (
                <div className="navbar__favourites-items-count">
                  {favItems.length}
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
              {cartItems.length > 0 && (
                <div className="navbar__cart-items-count">
                  {cartItems.length}
                </div>
              )}
            </div>
          </NavLink>
        </div>

        <div className="navbar__burgerMenu" onClick={menuHandler}>
          {isBurgerMenuOpen ? (
            <div
              className="navbar__burgerMenu-logo navbar__burgerMenu-logo_open"
            />
          ) : (
            <div
              className="navbar__burgerMenu-logo navbar__burgerMenu-logo_clos"
            />
          )}
        </div>
      </div>

      <MenuBurger
        isBurgerMenu={isBurgerMenuOpen}
        menuHandler={menuHandler}
        cartItemsCount={cartItems.length}
        favItemsCount={favItems.length}
      />
    </div>
  );
};
