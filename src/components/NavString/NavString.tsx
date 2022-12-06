import React from 'react';
import { Link } from 'react-router-dom';

import './NavString.scss';

import homeImg from '../../images/Home.svg';

type Props = {
  links: Array<{
    title: string,
    path: string,
  }>
};

export const NavString: React.FC<Props> = ({ links }) => (
  <ul className="navstring list-reset">
    {links.map(({
      title,
      path,
    }) => {
      return (
        <li className="navstring__item text text--secondary" key={path}>
          <Link
            to={path}
            className="navstring__link link-reset"
          >
            {title !== 'home'
              ? title
              : <img src={homeImg} alt="" className="navstring__home" />}
          </Link>
        </li>
      );
    })}
  </ul>
);
