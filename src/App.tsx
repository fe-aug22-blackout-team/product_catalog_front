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
import { appRoutes } from './routes/Routes';

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
            element={<Navigate to={appRoutes.home} />}
          />
          <Route
            path={appRoutes.home}
            element={<HomePage />}
          />
          <Route
            path={appRoutes.phones}
            element={<PhonesPage />}
          />
          <Route
            path={appRoutes.tablets}
            element={<TabletsPage />}
          />
          <Route
            path={appRoutes.accessories}
            element={<AccessoriesPage />}
          />
          <Route
            path={appRoutes.favourites}
            element={<FavouritesPage />}
          />
          <Route
            path={appRoutes.cart}
            element={<CartPage />}
          />
          <Route
            path={appRoutes.mobile_menu}
            element={<MobileMenu menuHandler={menuHandler} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
