import React from 'react';
import { ButtonType } from '../../../types/Button';
import { Button } from '../../UI/Button';

import './ColorPicker.scss';

type Props = {
  id: string;
  colors: string[];
};

export const ColorPicker: React.FC<Props> = ({ id, colors }) => {
  return (
    <div className='color-picker'>
      {colors.map(color => (
        <div className='btn-color__wrapper' key={id}>
          <Button buttonType={ButtonType.ColorPick} color={color} />
        </div>
      ))}
    </div>
  );
};
