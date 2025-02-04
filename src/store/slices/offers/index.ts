import {createSelector, createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../../common/const';
import {TOffersState} from '../../../types/state';
import {TOffer, TOfferPreview} from '../../../types/offers';
import {appSlice} from '../app';
import {getProcessedOffers} from '../../../common/utils';
import {fetchAllOffers, fetchOffer, fetchNearbyOffers} from '../../thunks/offers';

const initialState: TOffersState = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  requestStatus: RequestStatus.Idle
};

const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  selectors: {
    offers: (state: TOffersState): TOfferPreview[] => state.offers,
    offer: (state: TOffersState): TOffer | null => state.offer,
    nearbyOffers: (state: TOffersState): TOfferPreview[] => state.nearbyOffers,
    requestStatus: (state: TOffersState): RequestStatus => state.requestStatus,
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
});

const offersSliceActions = {
  ...offersSlice.actions,
  fetchAllOffers,
  fetchOffer,
  fetchNearbyOffers
};

const offersSliceSelectors = {
  ...offersSlice.selectors,
  currentCitySortedOffers: createSelector(
    offersSlice.selectors.offers,
    appSlice.selectors.currentCity,
    appSlice.selectors.currentOffersSortType,
    (offers, city, sortType) => getProcessedOffers(offers, city, sortType))
};

export {offersSlice, offersSliceActions, offersSliceSelectors};
