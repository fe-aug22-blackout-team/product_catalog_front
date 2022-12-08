import React, { useState } from 'react';
import { ActiveWindow } from './ActiveWindow';

import './ItemGallery.scss';
import { Thumbnails } from './Thumbnails';

const images = [
  'https://i.imgur.com/40SIOFJ.png',
  'https://i.imgur.com/3dEIvHL.png',
  'https://i.imgur.com/QxCe36g.png',
  'https://i.imgur.com/mdxY55F.png',
  'https://i.imgur.com/XSvVJL2.png',
];

export const ItemGallery: React.FC = () => {
  const [thumbnails] = useState(images);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='gallery'>
      {thumbnails.length !== 0 && (
        <>
          <div className='gallery__active-window'>
            <ActiveWindow activeThumbnail={thumbnails[activeIndex]} />
          </div>

          <div className='gallery__thumbnails'>
            <Thumbnails
              thumbnails={thumbnails}
              handleClick={handleClick}
            />
          </div>
        </>
      )}
    </div>
  );
};
