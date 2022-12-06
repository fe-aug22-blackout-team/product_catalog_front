/* eslint-disable max-len */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { appRoutes } from '../../routes/Routes';

import './ProductInfo.scss';

import { ButtonType } from '../../types/Button';
import { Button } from '../UI/Button';
import { NavString } from '../NavString';

export const ProductInfo: React.FC = () => {
  const { phoneId } = useParams();

  return (
    <main className='product-info'>
      <div className="product-info__container">
        <div className="product-info__breadcrumbs">
          <NavString links={[
            { title: 'home', path: appRoutes.home },
            { title: 'Phones', path: appRoutes.phones },
            { title: 'Apple iPhone 11 Pro Max 64GB Gold', path: `${appRoutes.phones}/${phoneId}` },
          ]} />
        </div>

        <Link
          to={appRoutes.phones}
        >
          Back
        </Link>

        <h2 className='product-info__title'>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h2>

        <section className="product-info__choose choose">
          <div className="choose__block">
            {/* Slider */}
          </div>

          <div className="choose__block">
            <div className="choose__options">
              <div className="choose__item">
                <p className="choose__text">
                  <span className='choose__text-item'>Available colors</span>
                  <span className='choose__text-item'>ID: 802390</span>
                </p>

                <div className="choose__content">
                  {/* Color picker with buttons */}
                </div>
              </div>

              <div className="choose__item">
                <p className="choose__text">
                  Select capacity
                </p>

                <div className="choose__content">
                  <button className='choose__btn choose__btn--active'>64 GB</button>
                  <button className='choose__btn'>256 GB</button>
                  <button className='choose__btn'>512 GB</button>
                </div>
              </div>
            </div>

            <div className="choose__price">
              <p className="choose__price-item">799</p>
              <p className="choose__price-item choose__price-item--crossed">
                1199
              </p>
            </div>

            <div className="choose__controls">
              <Button
                buttonType={ButtonType.Main}
                isInCart={false}
                innerText={'Add to cart'}
              />

              <Button buttonType={ButtonType.Favourite} />
            </div>

            <div className="choose__info">
              <div className="choose__info-item info-item">
                <p className="info-item__text">Screen</p>
                <p className="info-item__value">6.5” OLED</p>
              </div>

              <div className="choose__info-item info-item">
                <p className="info-item__text">Resolution</p>
                <p className="info-item__value">2688x1242</p>
              </div>

              <div className="choose__info-item info-item">
                <p className="info-item__text">Processor</p>
                <p className="info-item__value">Apple A12 Bionic</p>
              </div>

              <div className="choose__info-item info-item">
                <p className="info-item__text">RAM</p>
                <p className="info-item__value">3 GB</p>
              </div>
            </div>
          </div>
        </section>

        <section className="product-info__details">
          <div className="product-info__about about">
            <h3 className='about__title'>About</h3>
            <article className="about__article article">
              <h4 className="article__subtitle">And then there was Pro</h4>
              <div className="article__content">
                <p className="article__paragraph">
                  A transformative triple-camera system that adds tons of capability without complexity.
                </p>
                <p className='article__paragraph'>
                  An unprecedented leap in battery life. And a mind blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.
                </p>
              </div>
            </article>
            <article className="about__article article">
              <h4 className="article__subtitle">Camera</h4>
              <div className="article__content">
                <p className="article__paragraph">
                  Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You&apos;ve never shot with anything like it.
                </p>
              </div>
            </article>
            <article className="about__article article">
              <h4 className="article__subtitle">Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.</h4>
              <div className="article__content">
                <p className="article__paragraph">
                  iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.
                </p>
              </div>
            </article>
          </div>

          <div className='product-info__techspecs techspecs'>
            <h3 className="techspecs__title">Tech specs</h3>
            <div className="techspecs__content">
              <div className="techspecs__item">
                <p className="techspecs__text">Screen</p>
                <p className="techspecs__value">6.5” OLED</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Resolution</p>
                <p className="techspecs__value">2688x1242</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Processor</p>
                <p className="techspecs__value">Apple A12 Bionic</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">RAM</p>
                <p className="techspecs__value">3 GB</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Built in memory</p>
                <p className="techspecs__value">64 GB</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Camera</p>
                <p className="techspecs__value">12 Mp + 12 Mp + 12 Mp (Triple)</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Zoom</p>
                <p className="techspecs__value">Optical, 2x</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Cell</p>
                <p className="techspecs__value">GSM, LTE, UMTS</p>
              </div>
            </div>
          </div>
        </section>

        {/* You may also like component */}
      </div>
    </main>
  );
};
