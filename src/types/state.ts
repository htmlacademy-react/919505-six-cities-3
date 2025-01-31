import {store} from '../store';
import {TCityName, TOfferPreview, TOfferSortType} from './offers';
import {RequestStatus} from '../common/const';

export type TAppDataState = {
  offers: TOfferPreview[];
  offersStatus: RequestStatus;
  requestStatus: RequestStatus;
}

export type TAppProcessState = {
  currentCity: TCityName;
  activeOfferId: string | null;
  currentOffersSortType: TOfferSortType;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
