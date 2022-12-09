import React from 'react';
import { ColorItem } from './ColorItem';

import './ColorPicker.scss';

type Props = {
  id: string;
  colors: string[];
};

export const ColorPicker: React.FC<Props> = ({ id, colors }) => {
  return (
    <div className='color-picker'>
      {colors.map(color => {
        const activeColor = id.split('-').slice(-1).join('');
        const isActive = activeColor === color;

        return (
          <React.Fragment key={color}>
            <ColorItem color={color} isActive={isActive} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
