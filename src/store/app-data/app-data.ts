import {createSelector, createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../common/const';
import {TAppDataState} from '../../types/state';
import {offerPreviews} from '../../mocks/offer-previews';
import {TOfferPreview} from '../../types/offers';
import {appProcess} from '../app-process/app-process';
import {getProcessedOffers} from '../../common/utils';

const initialState: TAppDataState = {
  offers: offerPreviews
};

const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  selectors: {
    offers: (state: TAppDataState): TOfferPreview[] => state.offers
  }
});

const appDataSelectors = {
  ...appData.selectors,
  currentCitySortedOffers: createSelector(
    appData.selectors.offers,
    appProcess.selectors.currentCity,
    appProcess.selectors.currentOffersSortType,
    (offers, city, sortType) => getProcessedOffers(offers, city, sortType))
};

export {appData, appDataSelectors};
