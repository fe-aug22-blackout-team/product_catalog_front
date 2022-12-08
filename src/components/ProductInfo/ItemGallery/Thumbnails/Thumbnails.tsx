import React from 'react';
import { Thumbnail } from './Thumbnail/Thumbnail';

import './Thumbnails.scss';

type Props = {
  thumbnails: string[];
  handleClick: (index: number) => void;
};

export const Thumbnails: React.FC<Props> = ({ thumbnails, handleClick }) => {
  return (
    <div className='thumbnails'>
      {thumbnails.map((thumbnail, index) => (
        <React.Fragment key={thumbnail}>
          <Thumbnail
            thumbnail={thumbnail}
            index={index}
            handleClick={handleClick}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
