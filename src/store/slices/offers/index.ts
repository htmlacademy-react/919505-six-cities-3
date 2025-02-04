import {createSelector, createSlice} from '@reduxjs/toolkit';
import {FavoriteStatus, NameSpace, RequestStatus} from '../../../common/const';
import {TOffersState} from '../../../types/state';
import {TOffer, TOfferPreview} from '../../../types/offers';
import {appSlice} from '../app';
import {getProcessedOffers} from '../../../common/utils';
import {fetchAllOffers, fetchOffer, fetchNearbyOffers} from '../../thunks/offers';
import {changeFavorite, fetchFavorites} from '../../thunks/favorites';

const initialState: TOffersState = {
  offers: [],
  favoriteOffers: [],
  offer: null,
  nearbyOffers: [],
  requestStatus: RequestStatus.Idle
};

function getItemIndex(offers: TOfferPreview[], offerId : string) {
  let index = null;

  const newOffer = offers
    .find((offer) => offer.id === offerId);

  if (newOffer) {
    for (let i = 0; i < offers.length; i++) {
      if (offers[i].id === newOffer.id) {
        index = i;
        break;
      }
    }

    return index;
  }
}

const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  selectors: {
    offers: (state: TOffersState): TOfferPreview[] => state.offers,
    favoriteOffers: (state: TOffersState): TOfferPreview[] => state.favoriteOffers,
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
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        const newOffer = action.payload.offer;

        if (newOffer.id === state.offer?.id) {
          state.offer.isFavorite = Boolean(action.payload.status);
        }

        switch (action.payload.status) {
          case FavoriteStatus.Added:
            state.favoriteOffers.push(newOffer);
            break;
          case FavoriteStatus.Removed:
            state.favoriteOffers = state.favoriteOffers.filter(({id}) => id !== newOffer.id);
            break;
        }

        const offerIndex = getItemIndex(state.offers, newOffer.id);
        const nearByOfferIndex = getItemIndex(state.nearbyOffers, newOffer.id);

        if (typeof offerIndex === 'number') {
          state.offers = [...state.offers.slice(0, offerIndex), newOffer, ...state.offers.slice(offerIndex + 1)];
        }

        if (typeof nearByOfferIndex === 'number') {
          state.nearbyOffers = [...state.nearbyOffers.slice(0, nearByOfferIndex), newOffer, ...state.nearbyOffers.slice(nearByOfferIndex + 1)];
        }
      })
});

const offersSliceActions = {
  ...offersSlice.actions,
  fetchAllOffers,
  fetchOffer,
  fetchNearbyOffers,
  fetchFavorites,
  changeFavorite
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
