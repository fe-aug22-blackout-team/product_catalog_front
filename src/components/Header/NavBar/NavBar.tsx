import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar: React.FC = () => {
  const navbarLinks = ['home', 'phones', 'tablets', 'accessories'];

  return (
    <div className='navbar'>
      <div className='navbar__logo'>NICE GADGETS</div>

      <ul className='navbar__links'>
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
  );
};
