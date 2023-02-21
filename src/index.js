import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import RecipePage from './components/RecipePage/RecipePage';
import NoPageFound from './components/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<App />} />
          <Route path=':recipeId' element={<RecipePage />} />
          <Route path='*' element={<NoPageFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

