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
  offersStatus: RequestStatus.Idle,

  offer: null,
  offerStatus: RequestStatus.Idle,

  nearbyOffers: [],
  nearbyOffersStatus: RequestStatus.Idle,

  reviews: [],
  reviewsStatus: RequestStatus.Idle,

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
    offersStatus: (state: TAppDataState): RequestStatus => state.offersStatus,
    offerStatus: (state: TAppDataState): RequestStatus => state.offerStatus
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
        state.offersStatus = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Idle;
        state.offersStatus = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.requestStatus = RequestStatus.Idle;
        state.offersStatus = RequestStatus.Failed;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
        state.offerStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Idle;
        state.offerStatus = RequestStatus.Success;
        state.offer = action.payload;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.requestStatus = RequestStatus.Idle;
        state.offerStatus = RequestStatus.Failed;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
        state.nearbyOffersStatus = RequestStatus.Loading;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Idle;
        state.nearbyOffersStatus = RequestStatus.Success;
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.requestStatus = RequestStatus.Idle;
        state.nearbyOffersStatus = RequestStatus.Failed;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
        state.reviewsStatus = RequestStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Idle;
        state.reviewsStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.requestStatus = RequestStatus.Idle;
        state.reviewsStatus = RequestStatus.Failed;
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
