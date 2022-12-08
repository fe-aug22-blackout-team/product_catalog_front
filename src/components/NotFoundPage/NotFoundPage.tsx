import React from 'react';
import './NotFoundPage.scss';
import { NavLink } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="not-found-page main-container">
      <h1 className="not-found-page--title">Error 404 page not found</h1>
      <NavLink to='/product_catalog_front/' className="not-found-page--back" >
        Back to homepage
      </NavLink>
    </main>
  );
};
