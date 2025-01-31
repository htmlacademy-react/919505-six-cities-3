import {store} from '../store';
import {TCityName, TOffer, TOfferPreview, TOfferSortType} from './offers';
import {RequestStatus} from '../common/const';
import {TReview} from './reviews';

export type TAppDataState = {
  offers: TOfferPreview[];
  offer: TOffer | null;
  nearbyOffers: TOfferPreview[];
  reviews: TReview[];
  requestStatus: RequestStatus;
}

export type TAppProcessState = {
  currentCity: TCityName;
  activeOfferId: string | null;
  currentOffersSortType: TOfferSortType;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
