import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Cities} from './utils/const.ts';
import {offerCards} from './mocks/offer-cards.ts';
import {offerView} from './mocks/offer-view.ts';
import {reviews} from './mocks/reviews.ts';
import {generateFavoriteOffersObject} from './utils/common.ts';
import {Review} from './utils/types.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const currentCity = Cities[3];
const offersFilteredByCity = offerCards.filter((offer) => offer.city.name === currentCity);
const favoriteOffers = offerCards.filter((offer) => offer.isFavorite);
const favoritesObject = generateFavoriteOffersObject(favoriteOffers);

root.render(
  <React.StrictMode>
    <App
      currentCity={currentCity}
      offers={offersFilteredByCity}
      offerView={offerView}
      reviews={reviews as Review[]}
      favoritesObject={favoritesObject}
      favoritesQuantity={favoriteOffers.length}
    />
  </React.StrictMode>
);
