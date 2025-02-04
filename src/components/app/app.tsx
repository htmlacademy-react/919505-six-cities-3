import {BrowserRouter, Route, Routes} from 'react-router-dom';
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
import {offersSliceActions} from '../../store/slices/offers';
import {userSliceActions} from '../../store/slices/user';
import {getToken} from '../../services/token';

export default function App() {
  const {fetchAllOffers} = useActionCreators(offersSliceActions);
  const {checkAuth} = useActionCreators(userSliceActions);

  const token = getToken();

  useEffect(() => {
    fetchAllOffers();
  });

  useEffect(() => {
    if (token) {
      checkAuth();
    }
  }, [token, checkAuth]);

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
              <PrivateRoute isReverse>
                <LoginScreen/>
              </PrivateRoute>
            )}
          />

          <Route
            path={AppRoute.Favorites}
            element={(
              <PrivateRoute>
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
