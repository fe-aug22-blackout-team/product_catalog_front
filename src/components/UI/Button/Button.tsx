import React from 'react';
import { ButtonType } from '../../../types/Button';
import './Button.scss';

type Props = {
  type: ButtonType;
  innerText?: string;
  path?: string;
}

export const Button: React.FC<Props> = ({ innerText, path }) => {
  return (
    <a className="button" href={path} >
      {innerText}
    </a>
  );
};
