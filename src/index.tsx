import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {Cities} from './utils/const.ts';
import {offerPreviews} from './mocks/offer-previews.ts';
import {offer} from './mocks/offer.ts';
import {reviews} from './mocks/reviews.ts';
import {generateFavoriteOffersObject} from './utils/common.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const currentCity = Cities[3];
const offersFilteredByCity = offerPreviews.filter((offerPreview) => offerPreview.city.name === currentCity);
const favoriteOffers = offerPreviews.filter((offerPreview) => offerPreview.isFavorite);
const favoritesObject = generateFavoriteOffersObject(favoriteOffers);

root.render(
  <React.StrictMode>
    <App
      currentCity={currentCity}
      offerPreviews={offersFilteredByCity}
      offer={offer}
      reviews={reviews}
      favoritesObject={favoritesObject}
      favoritesQuantity={favoriteOffers.length}
    />
  </React.StrictMode>
);
