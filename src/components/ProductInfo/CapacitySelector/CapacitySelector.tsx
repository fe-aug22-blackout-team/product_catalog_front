import React from 'react';

import './CapacitySelector.scss';

type Props = {
  id: string;
  capacities: string[];
};

export const CapacitySelector: React.FC<Props> = ({ id, capacities }) => {
  return (
    <div className='capacity-selector'>
      {capacities.map(capacity => (
        <button
          key={capacity}
          className='capacity-selector__btn'
        >
          {capacity}
        </button>
      ))}
    </div>
  );
};
