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
  offersRequestStatus: RequestStatus;
  favoriteOffersRequestStatus: RequestStatus;
  changeFavoriteOffersRequestStatus: RequestStatus;
  offerRequestStatus: RequestStatus;
  nearbyOffersRequestStatus: RequestStatus;
}

export type TReviewsState = {
  reviews: TReview[];
  postReviewRequestStatus: RequestStatus;
  fetchReviewsRequestStatus: RequestStatus;
}

export type TAppProcessState = {
  currentCity: TCityName;
  activeOfferId: string | null;
  currentOffersSortType: TOfferSortType;
}

export type TUserState = {
  info: TUser | null;
  authorizationStatus: AuthorizationStatus;
  userRequestStatus: RequestStatus;
}

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
