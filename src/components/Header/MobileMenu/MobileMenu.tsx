import React from 'react';
import { NavLink } from 'react-router-dom';
import { appRoutes } from '../../../routes/Routes';

import { navbarLinksContent } from '../NavBar/constants';
import './MobileMenu.scss';

type Props = {
  menuHandler: () => void;
};

export const MobileMenu: React.FC<Props> = ({ menuHandler }) => {
  return (
    <div className='mobileMenu'>
      <div className="mobileMenu__top">
        <ul className='mobileMenu__links'>
          {navbarLinksContent.map(({ id, route, title }) => (
            <li
              className='mobileMenu__item'
              key={id}
              onClick={menuHandler}
            >
              <NavLink
                to={route}
                className="mobileMenu__link"
              >
                {title.toUpperCase()}
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
            to={appRoutes.favourites}
            className="mobileMenu__link"
          >
            <div className="mobileMenu__favourites-logo"></div>
          </NavLink>
        </div>
        <div className="mobileMenu__cart" onClick={menuHandler}>
          <NavLink
            to={appRoutes.cart}
            className="mobileMenu__link"
          >
            <div className="mobileMenu__cart-logo"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
