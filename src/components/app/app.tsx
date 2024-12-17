import {Page} from '../../common/const.ts';
import Layout from '../layout/layout';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import OfferPage from '../pages/offer-page/offer-page';
import {offerPreviews} from '../../mocks/offer-previews';
import {Offer} from '../../mocks/offer';
import {getFavoriteOffersQuantity} from '../../common/utils.ts';
import {FavoritesObjectType, OfferPreviewType, ReviewType} from '../../common/types.ts';
import FavoritesPage from '../pages/favorites-page/favorites-page.tsx';

type AppProps = {
  currentCity: string;
  offers: OfferPreviewType[];
  reviews: ReviewType[];
  favoritesObject: FavoritesObjectType;
}

const currentPage = Page.MAIN;

const getPage = (currentCity: string, offers: OfferPreviewType[], reviews: ReviewType[], favoritesObject: FavoritesObjectType) => {
  switch (currentPage) {
    case Page.MAIN:
      return (
        <Layout currentPage={Page.MAIN} favoritesQuantity={getFavoriteOffersQuantity(offerPreviews)}>
          <MainPage currentCity={currentCity} offers={offers}/>
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
          <OfferPage currentOffer={Offer} reviews={reviews} nearOffers={offers}/>
        </Layout>
      );

    case Page.FAVORITES:
      return (
        <Layout currentPage={Page.FAVORITES} favoritesQuantity={getFavoriteOffersQuantity(offerPreviews)}>
          <FavoritesPage favoritesObject={favoritesObject}/>
        </Layout>
      );
  }
};

export default function App({currentCity, offers, reviews, favoritesObject}: AppProps) {
  return getPage(currentCity, offers, reviews, favoritesObject);
}
