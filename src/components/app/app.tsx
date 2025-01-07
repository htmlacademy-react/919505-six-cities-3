import {AppProps} from '../../utils/types.ts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../utils/const.ts';
import Layout from '../layout/layout.tsx';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import {getAuthorizationStatus} from '../../utils/common.ts';

export default function App(props: AppProps) {
  const {currentCity, offers, offerView, reviews, favoritesObject, favoritesQuantity} = props;
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout favoritesQuantity={favoritesQuantity}/>}
        >

          <Route
            index
            element={<MainScreen currentCity={currentCity} offers={offers}/>}
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
                <FavoritesScreen favoritesObject={favoritesObject}/>
              </PrivateRoute>
            )}
          />

          <Route
            path={AppRoute.Offer}
            element={<OfferScreen offerView={offerView} reviews={reviews} nearOffers={offers}/>}
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
