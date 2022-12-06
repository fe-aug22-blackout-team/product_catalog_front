import React from 'react';
import cn from 'classnames';

import { NavLink } from 'react-router-dom';
import { appRoutes } from '../../../routes/Routes';
import { navbarLinksContent } from '../NavBar/constants';

import './MenuBurger.scss';

type Props = {
  isBurgerMenu: boolean;
  menuHandler: () => void;
  cartItemsCount: number;
  favItemsCount: number;
};

export const MenuBurger: React.FC<Props> = ({
  isBurgerMenu,
  menuHandler,
  cartItemsCount,
  favItemsCount,
}) => {
  if (isBurgerMenu) {
    document.body.classList.add('page__with-menu');
  } else {
    document.body.classList.remove('page__with-menu');
  }

  return (
    <div
      className={cn('MenuWrapper', { 'visibility-hidden': !isBurgerMenu })}
    >
      <div
        className={cn('MenuBurger', { 'MenuBurger--active': isBurgerMenu })}
      >
        <div className="MenuBurger__top">
          <ul className='MenuBurger__links'>
            {navbarLinksContent.map(({ id, route, title }) => (
              <li
                className='MenuBurger__item'
                key={id}
                onClick={menuHandler}
              >
                <NavLink
                  to={route}
                  className="MenuBurger__link"
                >
                  {title.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="MenuBurger__bottom">
          <div className="MenuBurger__favourites" onClick={menuHandler}>
            <NavLink
              to={appRoutes.favourites}
              className="MenuBurger__link"
            >
              <div className="MenuBurger__favourites-logo">
                {favItemsCount > 0 && (
                  <div className="MenuBurger__favourites-items-count">
                    {favItemsCount}
                  </div>
                )}
              </div>
            </NavLink>
          </div>

          <div className="MenuBurger__cart" onClick={menuHandler}>
            <NavLink
              to={appRoutes.cart}
              className="MenuBurger__link"
            >
              <div className="MenuBurger__cart-logo">
                {cartItemsCount > 0 && (
                  <div className="MenuBurger__cart-items-count">
                    {cartItemsCount}
                  </div>
                )}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
