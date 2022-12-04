import React from 'react';
import './Categories.scss';
import { NavLink } from 'react-router-dom';
import { appRoutes } from '../../../routes/Routes';

type Props = {
  phonesCount: number;
  tabletCount: number;
  accessoriesCount: number;
};

export const Categories: React.FC<Props> = ({
  phonesCount,
  tabletCount,
  accessoriesCount,
}) => {
  return (
    <section className="Categories">
      <h2 className="Categories__title">Shop by category</h2>
      <div className="Categories__list">

        <div className="Categories__item">
          <NavLink
            className="Categories__link"
            to={appRoutes.phones}
          >
            <div
              className="Categories__link-container Categories__phones"
            >
            </div>

            <h4 className="Categories__subtitle">Mobile phones</h4>
          </NavLink>
          <span className="Categories__info">
            {`${phonesCount} models`}
          </span>
        </div>

        <div className="Categories__item">
          <NavLink
            className="Categories__link"
            to={appRoutes.tablets}
          >
            <div
              className="Categories__link-container Categories__tablets"
            >
            </div>

            <h4 className="Categories__subtitle">Tablets</h4>
          </NavLink>
          <span className="Categories__info">
            {`${tabletCount} models`}
          </span>
        </div>

        <div className="Categories__item">
          <NavLink
            className="Categories__link"
            to={appRoutes.accessories}
          >
            <div
              className="Categories__link-container Categories__accessories"
            >
            </div>

            <h4 className="Categories__subtitle">Accessories</h4>
          </NavLink>
          <span className="Categories__info">
            {`${accessoriesCount} models`}
          </span>
        </div>
      </div>
    </section>
  );
};
