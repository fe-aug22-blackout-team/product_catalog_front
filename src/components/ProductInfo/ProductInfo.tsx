/* eslint-disable max-len */
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { appRoutes } from '../../routes/Routes';

import './ProductInfo.scss';

import { ButtonType } from '../../types/Button';
import { Button } from '../UI/Button';
import { NavString } from '../NavString';
import { MemoizedPhoneSlider } from '../HomePage/PhonesSlider';
import { Product } from '../../types/Product';
import { getProductById, getRecommendedProducts } from '../../api/phones';
import { Loader } from '../UI/Loader';
import { ItemGallery } from './ItemGallery';
import { PhoneInfo } from '../../types/PhoneInfo';
import { ColorPicker } from './ColorPicker';
import { CapacitySelector } from './CapacitySelector';
import { AboutSection } from './AboutSection';
import classNames from 'classnames';
import { LocaleStorageContext } from '../../context/localStorageContext';

export const ProductInfo: React.FC = () => {
  const [selectedPhone, setSelectedPhone] = useState<PhoneInfo | null>(null);
  const [similarPhones, setSimilarPhones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { phoneId } = useParams();

  const {
    cartItems,
    favItems,
    updateCartItems,
    updateFavItems,
  } = useContext(LocaleStorageContext);

  const isInCart = cartItems.some(item => item.phoneId === phoneId);
  const isFavourite = favItems.some(item => item.phoneId === phoneId);
  const chosenPhone = similarPhones.find(phone => phone.phoneId === phoneId);

  const handleAddCart = () => {
    if (!isInCart && chosenPhone) {
      const newCartItems = [...cartItems, chosenPhone];

      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      updateCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.filter(item => item.phoneId !== phoneId);

      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      updateCartItems(newCartItems);
    }
  };

  const handleAddFav = () => {
    if (!isFavourite && chosenPhone) {
      const newFavItems = [...favItems, chosenPhone];

      localStorage.setItem('favItems', JSON.stringify(newFavItems));
      updateFavItems(newFavItems);
    } else {
      const newFavItems = favItems.filter(item => item.phoneId !== phoneId);

      localStorage.setItem('favItems', JSON.stringify(newFavItems));
      updateFavItems(newFavItems);
    }
  };

  const getSelectedPhoneAndSimilarPhones = useCallback(async() => {
    try {
      if (phoneId) {
        setIsLoading(true);

        const phoneFromServer = await getProductById(phoneId);
        const recommendedPhonesFromServer = await getRecommendedProducts(phoneId);

        setSelectedPhone(phoneFromServer);
        setSimilarPhones(recommendedPhonesFromServer);
      }
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [phoneId]);

  useEffect(() => {
    getSelectedPhoneAndSimilarPhones();
  }, [phoneId]);

  const isDiscount = useMemo(() => {
    return selectedPhone?.priceDiscount !== selectedPhone?.priceRegular;
  }, [selectedPhone]);

  const upperCategory = similarPhones[0]?.category.slice(0, 1).toUpperCase()
    + similarPhones[0]?.category.slice(1);

  return (
    <main className='product-info'>
      <div className="product-info__container">
        <div className="product-info__breadcrumbs">
          <NavString links={[
            { title: 'home', path: appRoutes.home },
            { title: upperCategory || '', path: `/${similarPhones[0]?.category}` },
            { title: selectedPhone?.name || '', path: `${appRoutes.phones}/${phoneId}` },
          ]} />
        </div>

        <Link
          to={appRoutes.phones}
          className='product-info__back-btn'
        >
          <Button buttonType={ButtonType.Back} innerText='Back' />
        </Link>

        <h2 className='product-info__title'>{selectedPhone?.name}</h2>

        <section className="product-info__choose choose">
          <div className="choose__block">
            <div className="choose__gallery-wrapper">
              {selectedPhone && (
                <ItemGallery images={selectedPhone.images} />
              )}
            </div>
          </div>

          <div className="choose__block choose__block--options">
            <div className="choose__options">
              <div className="choose__item">
                <p className="choose__text">
                  <span className='choose__text-item'>Available colors</span>
                  <span className='choose__text-item'>ID: 802390</span>
                </p>

                <div className="choose__content">
                  {selectedPhone && (
                    <ColorPicker id={selectedPhone.id} colors={selectedPhone?.colorsAvailable} />
                  )}
                </div>
              </div>

              <div className="choose__item">
                <p className="choose__text">
                  Select capacity
                </p>

                <div className="choose__content">
                  {selectedPhone && (
                    <CapacitySelector id={selectedPhone.id} capacities={selectedPhone?.capacityAvailable} />
                  )}
                </div>
              </div>
            </div>

            <div className="choose__price">
              {isDiscount && (
                <p className="choose__price-item">
                  {selectedPhone?.priceDiscount}
                </p>
              )}

              <p className={classNames('choose__price-item', {
                'choose__price-item--crossed': isDiscount,
              })}>
                {selectedPhone?.priceRegular}
              </p>
            </div>

            <div className="choose__controls">
              <div onClick={handleAddCart}>
                <Button
                  buttonType={ButtonType.Main}
                  isInCart={isInCart}
                  innerText={isInCart
                    ? 'Remove from cart'
                    : 'Add to cart'}
                />
              </div>

              <div onClick={handleAddFav}>
                <Button
                  buttonType={ButtonType.Favourite}
                  isFavourite={isFavourite}
                />
              </div>
            </div>

            <div className="choose__info">
              <div className="choose__info-item info-item">
                <p className="info-item__text">Screen</p>
                <p className="info-item__value">{selectedPhone?.screen}</p>
              </div>

              <div className="choose__info-item info-item">
                <p className="info-item__text">Resolution</p>
                <p className="info-item__value">{selectedPhone?.resolution}</p>
              </div>

              <div className="choose__info-item info-item">
                <p className="info-item__text">Processor</p>
                <p className="info-item__value">{selectedPhone?.processor}</p>
              </div>

              <div className="choose__info-item info-item">
                <p className="info-item__text">RAM</p>
                <p className="info-item__value">{selectedPhone?.ram}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="product-info__details">
          <div className="product-info__about about">
            {selectedPhone && (
              <AboutSection id={selectedPhone.id} articles={selectedPhone?.description} />
            )}
          </div>

          <div className='product-info__techspecs techspecs'>
            <h3 className="techspecs__title">Tech specs</h3>
            <div className="techspecs__content">
              <div className="techspecs__item">
                <p className="techspecs__text">Screen</p>
                <p className="techspecs__value">{selectedPhone?.screen}</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Resolution</p>
                <p className="techspecs__value">{selectedPhone?.resolution}</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Processor</p>
                <p className="techspecs__value">{selectedPhone?.processor}</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">RAM</p>
                <p className="techspecs__value">{selectedPhone?.ram}</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Built in memory</p>
                <p className="techspecs__value">{selectedPhone?.capacity}</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Camera</p>
                <p className="techspecs__value">{selectedPhone?.camera}</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Zoom</p>
                <p className="techspecs__value">{selectedPhone?.zoom}</p>
              </div>
              <div className="techspecs__item">
                <p className="techspecs__text">Cell</p>
                <p className="techspecs__value">
                  {selectedPhone?.cell.join(', ')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {isLoading
        ? <Loader />
        : <MemoizedPhoneSlider
          phones={similarPhones}
          title='You may also like'
          itemWidth={272}
        />
      }
    </main>
  );
};
