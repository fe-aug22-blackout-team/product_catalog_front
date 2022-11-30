import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { AccessoriesPage } from './components/AccessoriesPage';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { PhonesPage } from './components/PhonesPage';
import { TabletsPage } from './components/TabletsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Navigate to='/product_catalog_front/home' replace />}
          />
          <Route
            path="/product_catalog_front/"
            element={<HomePage />}
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
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
