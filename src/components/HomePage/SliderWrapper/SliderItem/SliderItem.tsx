import React from 'react';

import './SliderItem.scss';

type Props = {
  children: React.ReactNode;
}

export const SliderItem: React.FC<Props> = ({ children }) => {
  return (
    <div className="slider-item" style={{ width: '100%' }}>
      {children}
    </div>
  );
};
