import {store} from '../store';
import {TCityName, TOffer, TOfferPreview, TOfferSortType} from './offers';
import {AuthorizationStatus, RequestStatus} from '../const';
import {TReview} from './reviews';
import {TUser} from './user';

export type TOffersState = {
  offers: TOfferPreview[];
  favoriteOffers: TOfferPreview[];
  offer: TOffer | null;
  nearbyOffers: TOfferPreview[];
  requestStatus: RequestStatus;
}

export type TFavoritesState = {
  offers: TOfferPreview[];
  requestStatus: RequestStatus;
}

export type TReviewsState = {
  reviews: TReview[];
  requestStatus: RequestStatus;
}

export type TAppProcessState = {
  currentCity: TCityName;
  activeOfferId: string | null;
  currentOffersSortType: TOfferSortType;
}

export type TUserState = {
  info: TUser | null;
  authorizationStatus: AuthorizationStatus;
  requestStatus: RequestStatus;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
