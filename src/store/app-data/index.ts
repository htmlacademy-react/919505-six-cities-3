import {createSelector, createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../common/const';
import {TAppDataState} from '../../types/state';
import {TOffer, TOfferPreview} from '../../types/offers';
import {appProcess} from '../app-process';
import {getProcessedOffers} from '../../common/utils';
import {fetchAllOffers, fetchOffer, fetchNearbyOffers, fetchReviews} from '../thunks/offers';
import {TReview} from '../../types/reviews';

const initialState: TAppDataState = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  reviews: [],
  requestStatus: RequestStatus.Idle
};

const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  selectors: {
    offers: (state: TAppDataState): TOfferPreview[] => state.offers,
    offer: (state: TAppDataState): TOffer | null => state.offer,
    nearbyOffers: (state: TAppDataState): TOfferPreview[] => state.nearbyOffers,
    reviews: (state: TAppDataState): TReview[] => state.reviews,
    requestStatus: (state: TAppDataState): RequestStatus => state.requestStatus,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Idle;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Idle;
        state.offer = action.payload;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Idle;
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Idle;
        state.reviews = action.payload;
      })
});

const appDataActions = {
  ...appData.actions,
  fetchAllOffers,
  fetchOffer,
  fetchNearbyOffers,
  fetchReviews
};

const appDataSelectors = {
  ...appData.selectors,
  currentCitySortedOffers: createSelector(
    appData.selectors.offers,
    appProcess.selectors.currentCity,
    appProcess.selectors.currentOffersSortType,
    (offers, city, sortType) => getProcessedOffers(offers, city, sortType))
};

export {appData, appDataActions, appDataSelectors};
