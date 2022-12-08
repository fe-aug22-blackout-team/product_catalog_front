import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import cn from 'classnames';

import { Product } from '../../../types/Product';
import { ProductCard } from '../../ProductCard';
import './PhonesSlider.scss';

type Props = {
  phones: Product[];
  title: string;
  itemWidth: number;
};

export const PhonesSlider: React.FC<Props> = ({ phones, title, itemWidth }) => {
  const [cardIndex, setCardIndex] = useState(0);

  const gap = 16;
  const shift = itemWidth + gap;

  const nextHandler = () => {
    if (cardIndex < phones.length - 4) {
      setCardIndex(current => current + 1);
    }
  };

  const prevHandler = () => {
    if (cardIndex > 0) {
      setCardIndex(current => current - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (cardIndex >= phones.length - 4) {
        return;
      }
      setCardIndex(current => current + 1);
    },
    onSwipedRight: () => {
      if (cardIndex <= 0) {
        return;
      }

      setCardIndex(current => current - 1);
    },
  });

  return (
    <div className="PhonesSlider">
      <div className="PhonesSlider__top-container">
        <h2 className="PhonesSlider__title">{title}</h2>
        <div className="PhonesSlider__buttons">
          <button
            className={cn('PhonesSlider__button', {
              'PhonesSlider__button--active': cardIndex === 0,
            })}
            onClick={prevHandler}
          >
            {'<'}
          </button>

          <button
            className={cn('PhonesSlider__button', {
              'PhonesSlider__button--active': cardIndex === phones.length - 4,
            })}
            onClick={nextHandler}
          >
            {'>'}
          </button>
        </div>
      </div>

      <div className="PhonesSlider__items-container">
        <ul
          {...swipeHandlers}
          className="PhonesSlider__items"
          style={{ transform: `translateX(-${cardIndex * shift}px)` }}
        >
          {phones.map(phone => (
            <li className="PhonesSlider__item-container" key={phone.id}>
              <ProductCard phone={phone} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const MemoizedPhoneSlider = React.memo(PhonesSlider);
