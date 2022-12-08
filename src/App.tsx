import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { AccessoriesPage } from './components/AccessoriesPage';
import { CartPage } from './components/CartPage';
import { FavouritesPage } from './components/FavouritesPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import { PhonesPage } from './components/PhonesPage';
import { ProductInfo } from './components/ProductInfo';
import { TabletsPage } from './components/TabletsPage';
import { appRoutes } from './routes/Routes';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path={appRoutes.home} element={<HomePage />} />

          <Route path={appRoutes.phones}>
            <Route index element={<PhonesPage />} />

            <Route path=":phoneId" element={<ProductInfo />} />
          </Route>

          <Route path={appRoutes.tablets} element={<TabletsPage />} />
          <Route path={appRoutes.accessories} element={<AccessoriesPage />} />
          <Route path={appRoutes.favourites} element={<FavouritesPage />} />
          <Route path={appRoutes.cart} element={<CartPage />} />
          <Route path={appRoutes.not_found} element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={appRoutes.not_found} />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
