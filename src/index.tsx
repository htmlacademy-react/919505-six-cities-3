import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Cities, Page} from './common/const.ts';
import {offerCards} from './mocks/offer-cards.ts';
import {offerView} from './mocks/offer-view.ts';
import {reviews} from './mocks/reviews.ts';
import {generateFavoriteOffersObject} from './common/utils.ts';
import {ReviewType} from './common/types.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const currentPage = Page.OFFER;

const currentCity = Cities[3];
const offersFilteredByCity = offerCards.filter((offer) => offer.city.name === currentCity);
const favoriteOffers = offerCards.filter((offer) => offer.isFavorite);
const favoritesObject = generateFavoriteOffersObject(favoriteOffers);

root.render(
  <React.StrictMode>
    <App
      currentPage={currentPage}
      currentCity={currentCity}
      offers={offersFilteredByCity}
      offerView={offerView}
      reviews={reviews as ReviewType[]}
      favoritesObject={favoritesObject}
      favoritesQuantity={favoriteOffers.length}
    />
  </React.StrictMode>
);
