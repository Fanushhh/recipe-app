import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import RecipePage from './components/RecipePage/RecipePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/recipe-app'>
      <Switch>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<App />} />
          <Route path=':recipeId' element={<RecipePage />} />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

