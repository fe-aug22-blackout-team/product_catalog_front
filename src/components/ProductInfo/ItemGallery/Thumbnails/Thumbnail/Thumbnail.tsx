import React from 'react';

import './Thumbnail.scss';

type Props = {
  thumbnail: string;
  index: number;
  handleClick: (index: number) => void;
}

export const Thumbnail: React.FC<Props> = ({
  thumbnail,
  index,
  handleClick,
}) => {
  return (
    <div className='thumbnail'>
      <img
        className='thumbnail__img'
        src={thumbnail}
        alt=""
        onClick={() => {
          handleClick(index);
        }}
      />
    </div>
  );
};
