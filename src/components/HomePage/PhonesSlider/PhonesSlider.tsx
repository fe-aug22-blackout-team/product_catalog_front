import React from 'react';
import cn from 'classnames';

import { Phone } from '../../../types/Phone';
import { ProductCard } from '../../ProductCard';
import './PhonesSlider.scss';

type Props = {
  phones: Phone[];
  title: string;
};

export const PhonesSlider: React.FC<Props> = ({ phones, title }) => {
  return (
    <div className="PhonesSlider">
      <div className="PhonesSlider__top-container">
        <h2 className="PhonesSlider__title">{title}</h2>
        <div className="PhonesSlider__buttons">
          <button className="PhonesSlider__button PhonesSlider__button--active">
            {'<'}
          </button>

          <button className="PhonesSlider__button">
            {'>'}
          </button>
        </div>
      </div>

      <ul className="PhonesSlider__items">
        {phones.map(phone => (
          <li className="NewModels__item-container" key={phone.id}>
            <ProductCard phone={phone} />
          </li>
        ))}
      </ul>
    </div>
  );
};
