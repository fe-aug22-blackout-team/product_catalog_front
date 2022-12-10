import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneInfo } from '../../../types/PhoneInfo';
import { appRoutes } from '../../../routes/Routes';

import './CapacitySelector.scss';
import classNames from 'classnames';

type Props = {
  capacities: string[];
  phone: PhoneInfo;
  handleCapacityChange: (newCapacity: string) => void;
};

export const CapacitySelector: React.FC<Props> = ({
  capacities,
  phone,
  handleCapacityChange,
}) => {
  return (
    <div className='capacity-selector'>
      {capacities.map(capacity => {
        const activeCapacity = phone.id.split('-').slice(-2, -1).join('');

        // eslint-disable-next-line no-console
        console.log(activeCapacity);

        const isActive = activeCapacity === capacity.toLowerCase();

        return (
          <Link key={capacity} to={`${appRoutes.phones}/${phone.namespaceId}?capacity=${capacity}&color=${phone.color}`}>
            <button
              key={capacity}
              className={classNames('capacity-selector__btn', {
                'capacity-selector__btn--active': isActive,
              })}
              onClick={() => {
                handleCapacityChange(capacity);
              }}
            >
              {capacity}
            </button>
          </Link>
        );
      })}
    </div>
  );
};
