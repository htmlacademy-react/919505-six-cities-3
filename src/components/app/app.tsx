import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {getAuthorizationStatus} from '../../common/utils';
import {AppRoute} from '../../common/const';
import Layout from '../layout';
import MainScreen from '../../pages/main-screen';
import LoginScreen from '../../pages/login-screen';
import PrivateRoute from '../private-route';
import FavoritesScreen from '../../pages/favorites-screen';
import OfferScreen from '../../pages/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen';
import ScrollToTop from '../scroll-to-top';
import {useEffect} from 'react';
import {useActionCreators} from '../../hooks/store';
import {appDataActions} from '../../store/app-data';

export default function App() {
  const {fetchAllOffers} = useActionCreators(appDataActions);

  useEffect(() => {
    fetchAllOffers();
  });

  return(
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout/>}
        >

          <Route
            index
            element={<MainScreen/>}
          />

          <Route
            path={AppRoute.Login}
            element={(
              <PrivateRoute authorizationStatus={getAuthorizationStatus()} isReverse>
                <LoginScreen/>
              </PrivateRoute>
            )}
          />

          <Route
            path={AppRoute.Favorites}
            element={(
              <PrivateRoute authorizationStatus={getAuthorizationStatus()}>
                <FavoritesScreen/>
              </PrivateRoute>
            )}
          />

          <Route
            path={AppRoute.OfferId}
            element={<OfferScreen/>}
          />

          <Route
            path={AppRoute.PageNotFound}
            element={<NotFoundScreen/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
