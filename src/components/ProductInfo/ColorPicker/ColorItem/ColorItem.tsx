import React from 'react';
import cn from 'classnames';

import './ColorItem.scss';

type Props = {
  color: string;
  isActive: boolean;
};

export const ColorItem: React.FC<Props> = ({ color, isActive }) => {
  return (
    <button
      className={cn('color-item', {
        'color-item--active': isActive,
      })}
      style={{ backgroundColor: color }}
    />
  );
};
