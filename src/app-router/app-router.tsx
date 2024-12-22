import {Route, Routes} from 'react-router-dom';
import {Page} from '../utils/const.ts';
import {AppProps, PageProps} from '../utils/types.ts';
import Layout from '../components/layout/layout.tsx';
import MainScreen from '../pages/main-screen/main-screen.tsx';
import LoginScreen from '../pages/login-screen/login-screen.tsx';
import OfferScreen from '../pages/offer-screen/offer-screen.tsx';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen.tsx';

const AppRoute = {
  [Page.Main]: '/',
  [Page.Login]: '/login',
  [Page.Offer]: '/offer',
  [Page.Favorites]: '/favorites',
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

function generateRoutes(pageProps: PageProps) {
  const routes: JSX.Element[] = [];

  for (const [key, value] of Object.entries(AppRoute)) {
    routes.push(<Route path={value} element={getPage(key, pageProps)} key={value}/>);
  }

  return routes;
}


export default function AppRouter({pageProps}: AppProps): JSX.Element {
  const routes = generateRoutes(pageProps);

  return (
    <Routes>
      {routes.map((route) => (route))}
    </Routes>
  );
}
