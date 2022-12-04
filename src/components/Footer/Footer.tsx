import React from 'react';
import style from './Footer.module.scss';
import logo from '../../images/icons_svg/Logo.svg';

const footerLinks = [
  {
    href: 'https://github.com/fe-aug22-blackout-team',
    text: 'Github',
  },
  {
    href: 'https://www.apple.com/contact/',
    text: 'Contacts',
  },
  {
    href: 'https://www.apple.com/shop/browse/open/salespolicies',
    text: 'Rights',
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__extra}>
          <a href="#" className={style.footer__logo}>
            <img
              className={style.footer__logo_image}
              src={logo}
              alt="NiceGadgets"
            ></img>
          </a>

          <ul className={style.footer__links}>
            {footerLinks.map(({ href, text }) => (
              <li key={text} className={style.footer__link}>
                <a
                  className={style.footer__link}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>

          <div className={style.footer__back}>
            <div className={style.footer__text}>
              Back to top
            </div>

            <a
              href="#home"
              className={style.footer__arrow}
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
