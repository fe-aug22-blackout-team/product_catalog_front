import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { AccessoriesPage } from './components/AccessoriesPage';
import { CartPage } from './components/CartPage';
import { FavouritesPage } from './components/FavouritesPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MobileMenu } from './components/Header/MobileMenu';
import { HomePage } from './components/HomePage';
import { PhonesPage } from './components/PhonesPage';
import { TabletsPage } from './components/TabletsPage';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuHandler = () => setIsMobileMenuOpen(current => !current);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isMobileMenu={isMobileMenuOpen} menuHandler={menuHandler} />
        <Routes>
          <Route
            path="/"
            element={<Navigate to='/product_catalog_front/home' replace />}
          />
          <Route
            path="/product_catalog_front/"
            element={<Navigate to='/product_catalog_front/home' replace />}
          />
          <Route
            path="/product_catalog_front/home"
            element={<HomePage />}
          />
          <Route
            path="/product_catalog_front/phones"
            element={<PhonesPage />}
          />
          <Route
            path="/product_catalog_front/tablets"
            element={<TabletsPage />}
          />
          <Route
            path="/product_catalog_front/accessories"
            element={<AccessoriesPage />}
          />
          <Route
            path="/product_catalog_front/favourites"
            element={<FavouritesPage />}
          />
          <Route
            path="/product_catalog_front/cart"
            element={<CartPage />}
          />
          <Route
            path="/product_catalog_front/mobile-menu"
            element={
              <MobileMenu
                menuHandler={menuHandler}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
