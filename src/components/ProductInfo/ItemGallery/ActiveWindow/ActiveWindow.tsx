import React from 'react';

import './ActiveWindow.scss';

type Props = {
  activeThumbnail: string;
};

export const ActiveWindow: React.FC<Props> = ({ activeThumbnail }) => {
  return (
    <div className='active-window'>
      <img
        className='active-window__img'
        src={activeThumbnail}
        alt="Product image"
      />
    </div>
  );
};
