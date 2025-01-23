import {store} from '../store';
import {TCityName, TOfferPreview} from './offers';

export type TAppDataState = {
  offers: TOfferPreview[];
}

export type TAppProcessState = {
  currentCity: TCityName;
  currentOffer: string | null;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
