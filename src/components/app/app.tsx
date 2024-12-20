import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Page, AppRoute} from '../../utils/const.ts';
import Layout from '../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import {FavoritesObject, OfferPreview, OfferView, Review} from '../../utils/types.ts';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';

type AppProps = {
  currentCity: string;
  offers: OfferPreview[];
  offerView: OfferView;
  reviews: Review[];
  favoritesObject: FavoritesObject;
  favoritesQuantity: number;
}

const getPage = (
  currentPage: string,
  currentCity: string,
  offers: OfferPreview[],
  offerView: OfferView,
  reviews: Review[],
  favoritesObject: FavoritesObject,
  favoritesQuantity: number
) => {
  switch (currentPage) {
    case Page.MAIN:
      return (
        <Layout currentPage={Page.MAIN} favoritesQuantity={favoritesQuantity}>
          <MainScreen currentCity={currentCity} offers={offers}/>
        </Layout>
      );

    case Page.LOGIN:
      return (
        <Layout currentPage={Page.LOGIN} favoritesQuantity={favoritesQuantity}>
          <LoginScreen/>
        </Layout>
      );

    case Page.OFFER:
      return (
        <Layout currentPage={Page.OFFER} favoritesQuantity={favoritesQuantity}>
          <OfferScreen offerView={offerView} reviews={reviews} nearOffers={offers}/>
        </Layout>
      );

    case Page.FAVORITES:
      return (
        <Layout currentPage={Page.FAVORITES} favoritesQuantity={favoritesQuantity}>
          <FavoritesScreen favoritesObject={favoritesObject}/>
        </Layout>
      );
  }
};

export default function App({currentCity, offers, offerView, reviews, favoritesObject, favoritesQuantity}: AppProps) {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={getPage(Page.MAIN, currentCity, offers, offerView, reviews, favoritesObject, favoritesQuantity)}/>
        <Route path={AppRoute.Login} element={getPage(Page.LOGIN, currentCity, offers, offerView, reviews, favoritesObject, favoritesQuantity)}/>
        <Route path={AppRoute.Offer} element={getPage(Page.OFFER, currentCity, offers, offerView, reviews, favoritesObject, favoritesQuantity)}/>
        <Route path={AppRoute.Favorites} element={getPage(Page.FAVORITES, currentCity, offers, offerView, reviews, favoritesObject, favoritesQuantity)}/>
      </Routes>
    </BrowserRouter>
  );
}
