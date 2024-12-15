import {Cities, Page} from '../../const.ts';
import Layout from '../layout/layout';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import OfferPage from '../pages/offer-page/offer-page';
import {offers} from '../../mocks/offers';
import {currentOffer} from '../../mocks/current-offer';
import {getFavoriteOffersQuantity} from '../../utils.ts';

const currentPage = Page.OFFER;
const currentCity = Cities[3];
const offersFilteredByCity = offers.filter((offer) => offer.city.name === currentCity);

const getPage = () => {
  switch (currentPage) {
    case Page.MAIN:
      return (
        <Layout currentPage={Page.MAIN} favoritesQuantity={getFavoriteOffersQuantity(offers)}>
          <MainPage currentCity={currentCity} offers={offersFilteredByCity}/>
        </Layout>
      );

    case Page.LOGIN:
      return (
        <Layout currentPage={Page.LOGIN} favoritesQuantity={getFavoriteOffersQuantity(offers)}>
          <LoginPage/>
        </Layout>
      );

    case Page.OFFER:
      return (
        <Layout currentPage={Page.OFFER} favoritesQuantity={getFavoriteOffersQuantity(offers)}>
          <OfferPage currentOffer={currentOffer} nearOffers={offersFilteredByCity}/>
        </Layout>
      );
  }
};

export default function App() {
  return getPage();
}
