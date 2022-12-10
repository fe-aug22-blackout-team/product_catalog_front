import React from 'react';
import { PhoneInfo } from '../../../types/PhoneInfo';
import { ColorItem } from './ColorItem';

import './ColorPicker.scss';

type Props = {
  id: string;
  colors: string[];
  phone: PhoneInfo;
  handleColorChange: (newColor: string) => void;
};

export const ColorPicker: React.FC<Props> = ({
  id,
  colors,
  phone,
  handleColorChange,
}) => {
  return (
    <div className='color-picker'>
      {colors.map(color => {
        const activeColor = id.split('-').slice(-1).join('');
        const isActive = activeColor === color;

        return (
          <React.Fragment key={color}>
            <ColorItem
              color={color}
              isActive={isActive}
              phone={phone}
              handleColorChange={handleColorChange}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};
