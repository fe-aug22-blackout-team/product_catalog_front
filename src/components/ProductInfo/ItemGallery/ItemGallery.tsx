import React, { useState } from 'react';
import { ActiveWindow } from './ActiveWindow';

import './ItemGallery.scss';
import { Thumbnails } from './Thumbnails';

type Props = {
  images: string[];
};

export const ItemGallery: React.FC<Props> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='gallery'>
      {images.length !== 0 && (
        <>
          <div className='gallery__active-window'>
            <ActiveWindow activeThumbnail={images[activeIndex]} />
          </div>

          <div className='gallery__thumbnails'>
            <Thumbnails
              thumbnails={images}
              handleClick={handleClick}
            />
          </div>
        </>
      )}
    </div>
  );
};
