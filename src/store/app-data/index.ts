import {createSelector, createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../common/const';
import {TAppDataState} from '../../types/state';
import {TOfferPreview} from '../../types/offers';
import {appProcess} from '../app-process';
import {getProcessedOffers} from '../../common/utils';
import {fetchAllOffers} from '../thunks/offers';

const initialState: TAppDataState = {
  offers: [],
  offersStatus: RequestStatus.Idle,
  requestStatus: RequestStatus.Idle
};

const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  selectors: {
    offers: (state: TAppDataState): TOfferPreview[] => state.offers,
    offersStatus: (state: TAppDataState): RequestStatus => state.offersStatus
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
        state.offersStatus = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.offersStatus = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
        state.offersStatus = RequestStatus.Failed;
      })
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
