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
  currentPage: string;
  currentCity: string;
  offers: OfferPreviewType[];
  reviews: ReviewType[];
  favoritesObject: FavoritesObjectType;
}

const getPage = (currentPage: string, currentCity: string, offers: OfferPreviewType[], reviews: ReviewType[], favoritesObject: FavoritesObjectType) => {
  const favoritesQuantity = getFavoriteOffersQuantity(offerPreviews);

  switch (currentPage) {
    case Page.MAIN:
      return (
        <Layout currentPage={Page.MAIN} favoritesQuantity={favoritesQuantity}>
          <MainPage currentCity={currentCity} offers={offers}/>
        </Layout>
      );

    case Page.LOGIN:
      return (
        <Layout currentPage={Page.LOGIN} favoritesQuantity={favoritesQuantity}>
          <LoginPage/>
        </Layout>
      );

    case Page.OFFER:
      return (
        <Layout currentPage={Page.OFFER} favoritesQuantity={favoritesQuantity}>
          <OfferPage currentOffer={Offer} reviews={reviews} nearOffers={offers}/>
        </Layout>
      );

    case Page.FAVORITES:
      return (
        <Layout currentPage={Page.FAVORITES} favoritesQuantity={favoritesQuantity}>
          <FavoritesPage favoritesObject={favoritesObject}/>
        </Layout>
      );
  }
};

export default function App({currentPage, currentCity, offers, reviews, favoritesObject}: AppProps) {
  return getPage(currentPage, currentCity, offers, reviews, favoritesObject);
}
