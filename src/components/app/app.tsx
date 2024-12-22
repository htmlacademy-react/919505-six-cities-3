import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Page, AppRoute} from '../../utils/const.ts';
import Layout from '../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import {FavoritesObject, OfferPreview, OfferView, Review} from '../../utils/types.ts';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';

type PageProps = {
  currentCity: string;
  offers: OfferPreview[];
  offerView: OfferView;
  reviews: Review[];
  favoritesObject: FavoritesObject;
  favoritesQuantity: number;
}

type AppProps = {
  pageProps: PageProps;
};

function getPage(currentPage: string, props: PageProps) {
  const {currentCity, offers, offerView, reviews, favoritesObject, favoritesQuantity}: PageProps = props;

  switch (currentPage) {
    case Page.Main:
      return (
        <Layout currentPage={Page.Main} favoritesQuantity={favoritesQuantity}>
          <MainScreen currentCity={currentCity} offers={offers}/>
        </Layout>
      );

    case Page.Login:
      return (
        <Layout currentPage={Page.Login} favoritesQuantity={favoritesQuantity}>
          <LoginScreen/>
        </Layout>
      );

    case Page.Offer:
      return (
        <Layout currentPage={Page.Offer} favoritesQuantity={favoritesQuantity}>
          <OfferScreen offerView={offerView} reviews={reviews} nearOffers={offers}/>
        </Layout>
      );

    case Page.Favorites:
      return (
        <Layout currentPage={Page.Favorites} favoritesQuantity={favoritesQuantity}>
          <FavoritesScreen favoritesObject={favoritesObject}/>
        </Layout>
      );
  }
}

export default function App({pageProps}: AppProps) {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={getPage(Page.Main, pageProps)}/>
        <Route path={AppRoute.Login} element={getPage(Page.Login, pageProps)}/>
        <Route path={AppRoute.Offer} element={getPage(Page.Offer, pageProps)}/>
        <Route path={AppRoute.Favorites} element={getPage(Page.Favorites, pageProps)}/>
      </Routes>
    </BrowserRouter>
  );
}
