import React from 'react';
import { NavBar } from './NavBar';
import './Header.scss';

type Props = {
  isMobileMenu: boolean;
  menuHandler: () => void;
};

export const Header: React.FC<Props> = ({ isMobileMenu, menuHandler }) => {
  return (
    <div className="header">
      <NavBar isMobileMenu={isMobileMenu} menuHandler={menuHandler} />
    </div>
  );
};
