import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

type Props = {
  isMobileMenu: boolean;
  menuHandler: () => void;
};

export const NavBar: React.FC<Props> = ({ isMobileMenu, menuHandler }) => {
  // const [isMobileMenuOpen, setIsMoMobileMenuOpen] = useState(false);
  const navbarLinks = ['home', 'phones', 'tablets', 'accessories'];

  return (
    <div className='navbar'>
      <div className="navbar__left">
        <ul className='navbar__links'>
          <div className='navbar__logo'></div>

          {navbarLinks.map((link, index) => (
            <li className='navbar__item' key={index}>
              <NavLink
                to={`/product_catalog_front/${link}`}
                className={({ isActive }) =>
                  'navbar__link ' + (isActive ? 'is-active' : '')
                }
              >
                {link.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar__right">
        <div className="navbar__favourites">
          <NavLink
            to={'/product_catalog_front/favourites'}
            className={({ isActive }) =>
              'navbar__link ' + (isActive ? 'is-active' : '')
            }
          >
            <div className="navbar__favourites-logo"></div>
          </NavLink>
        </div>
        <div className="navbar__cart">
          <NavLink
            to={'/product_catalog_front/cart'}
            className={({ isActive }) =>
              'navbar__link ' + (isActive ? 'is-active' : '')
            }
          >
            <div className="navbar__cart-logo"></div>
          </NavLink>
        </div>
        <div className="navbar__mobileMenu">
          {isMobileMenu ? (
            <NavLink
              to={'/product_catalog_front/home'}
              className={({ isActive }) =>
                'navbar__link ' + (isActive ? 'is-active' : '')
              }
            >
              <div
                className="navbar__mobileMenu-logo navbar__mobileMenu-logo_open"
                onClick={menuHandler}
              />
            </NavLink>
          ) : (
            <NavLink
              to={'/product_catalog_front/mobile-menu'}
              className={({ isActive }) =>
                'navbar__link ' + (isActive ? 'is-active' : '')
              }
            >
              <div
                className="navbar__mobileMenu-logo navbar__mobileMenu-logo_clos"
                onClick={menuHandler}
              />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
