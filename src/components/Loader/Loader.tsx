import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className="loader-wrapper loader-wrapper--5">
      <div className="loader loader--5">
        <div className="square"></div>
      </div>
    </div>
  );
};
