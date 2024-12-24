import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AuthorizationStatus, Page, AppRoute} from '../utils/const.ts';
import {AppProps, PageProps} from '../utils/types.ts';
import Layout from '../components/layout/layout.tsx';
import MainScreen from '../pages/main-screen/main-screen.tsx';
import LoginScreen from '../pages/login-screen/login-screen.tsx';
import OfferScreen from '../pages/offer-screen/offer-screen.tsx';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen.tsx';
import PrivateRoute from '../components/private-route/private-route.tsx';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen.tsx';

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
        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} rerouteDestination={AppRoute[Page.Login]}>
          <Layout currentPage={Page.Favorites} favoritesQuantity={favoritesQuantity}>
            <FavoritesScreen favoritesObject={favoritesObject}/>
          </Layout>
        </PrivateRoute>
      );

    case Page.PageNotFound:
      return (
        <Layout currentPage={Page.PageNotFound} favoritesQuantity={favoritesQuantity}>
          <NotFoundScreen/>
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
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (route))}
      </Routes>
    </BrowserRouter>
  );
}
