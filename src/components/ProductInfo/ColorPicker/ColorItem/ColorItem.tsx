import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { appRoutes } from '../../../../routes/Routes';

import './ColorItem.scss';
import { PhoneInfo } from '../../../../types/PhoneInfo';

type Props = {
  color: string;
  isActive: boolean;
  phone: PhoneInfo;
  handleColorChange: (newColor: string) => void;
};

export const ColorItem: React.FC<Props> = ({
  color,
  isActive,
  phone,
  handleColorChange,
}) => {
  return (
    <Link to={`${appRoutes.phones}/${phone.namespaceId}?capacity=${phone.capacity}&color=${color}`}>
      <button
        className={cn('color-item', {
          'color-item--active': isActive,
        })}
        style={{ backgroundColor: color }}
        onClick={() => {
          handleColorChange(color);
        }}
      />
    </Link>
  );
};
