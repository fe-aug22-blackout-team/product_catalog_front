import React from 'react';
import './Button.scss';

type Props = {
  innerText: string;
  path?: string;
}

export const Button: React.FC<Props> = ({ innerText, path }) => {
  return (
    <a className="button" href={path} >
      {innerText}
    </a>
  );
};
