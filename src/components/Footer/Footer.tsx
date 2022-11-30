import React from 'react';
import './Footer.scss';
import logo from '../../images/Logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__extra">
          <a href="#" className="footer__logo">
            <img
              className="footer__logo-image"
              src={logo}
              alt="NiceGadgets"
            ></img>
          </a>

          <div className="footer__links">
            <a
              href="https://github.com/fe-aug22-blackout-team"
              className="footer__link footer__github"
            >
              Github
            </a>

            <a
              href="#"
              className="footer__link footer__contacts"
            >
              Contacts
            </a>

            <a
              href="#"
              className="footer__link footer__rights"
            >
              Rights
            </a>
          </div>

          <div className="footer__back">
            <div className="footer__text">
              Back to top
            </div>

            <a
              href="#home"
              className="footer__arrow"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
