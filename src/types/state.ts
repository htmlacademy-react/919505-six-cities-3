import {store} from '../store';
import {TCityName, TOfferPreview, TOfferSortType} from './offers';

export type TAppDataState = {
  offers: TOfferPreview[];
}

export type TAppProcessState = {
  currentCity: TCityName;
  activeOfferId: string | null;
  isOffersSortingPanelOpen: boolean;
  currentOffersSortType: TOfferSortType;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
