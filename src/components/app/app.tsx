import {Cities, Page} from '../../const.ts';
import Layout from '../layout/layout';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import OfferPage from '../pages/offer-page/offer-page';
import {offerPreviews} from '../../mocks/offer-previews';
import {Offer} from '../../mocks/offer';
import {getFavoriteOffersQuantity} from '../../utils';
import {Reviews} from '../../mocks/reviews';

const currentPage = Page.OFFER;
const currentCity = Cities[3];
const offersFilteredByCity = offerPreviews.filter((offer) => offer.city.name === currentCity);
const reviews = Reviews;

const getPage = () => {
  switch (currentPage) {
    case Page.MAIN:
      return (
        <Layout currentPage={Page.MAIN} favoritesQuantity={getFavoriteOffersQuantity(offerPreviews)}>
          <MainPage currentCity={currentCity} offers={offersFilteredByCity}/>
        </Layout>
      );

    case Page.LOGIN:
      return (
        <Layout currentPage={Page.LOGIN} favoritesQuantity={getFavoriteOffersQuantity(offerPreviews)}>
          <LoginPage/>
        </Layout>
      );

    case Page.OFFER:
      return (
        <Layout currentPage={Page.OFFER} favoritesQuantity={getFavoriteOffersQuantity(offerPreviews)}>
          <OfferPage currentOffer={Offer} reviews={reviews} nearOffers={offersFilteredByCity}/>
        </Layout>
      );
  }
};

export default function App() {
  return getPage();
}
