import React from 'react';
import { NavBar } from './NavBar';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <NavBar />
    </div>
  );
};
