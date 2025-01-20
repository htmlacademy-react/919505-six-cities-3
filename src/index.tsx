import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {offerPreviews} from './mocks/offer-previews.ts';
import {generateFavoriteOffersObject} from './utils/common.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const favoriteOffers = offerPreviews.filter((offerPreview) => offerPreview.isFavorite);
const favoritesObject = generateFavoriteOffersObject(favoriteOffers);

root.render(
  <React.StrictMode>
    <App
      favoritesObject={favoritesObject}
      favoritesQuantity={favoriteOffers.length}
    />
  </React.StrictMode>
);
