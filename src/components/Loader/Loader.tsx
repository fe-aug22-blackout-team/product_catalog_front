import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="square"></div>
      </div>
    </div>
  );
};
