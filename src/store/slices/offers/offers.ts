import {createSelector, createSlice} from '@reduxjs/toolkit';
import {FavoriteStatus, NameSpace, RequestStatus} from '../../../const';
import {TOffersState} from '../../../types/store';
import {TOffer, TOfferPreview} from '../../../types/offers';
import {appSlice} from '../app';
import {checkFavoriteStatus, getProcessedOffers} from './utils';
import {fetchAllOffers, fetchNearbyOffers, fetchOffer} from '../../thunks/offers';
import {changeFavorite, fetchFavorites} from '../../thunks/favorites';

const initialState: TOffersState = {
  offers: [],
  favoriteOffers: [],
  offer: null,
  nearbyOffers: [],

  offersRequestStatus: RequestStatus.Idle,
  favoriteOffersRequestStatus: RequestStatus.Idle,
  changeFavoriteOffersRequestStatus: RequestStatus.Idle,
  offerRequestStatus: RequestStatus.Idle,
  nearbyOffersRequestStatus: RequestStatus.Idle,
};

const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    clearFavoriteOffers: (state) => {
      state.favoriteOffers = [];
    },
  },
  selectors: {
    offers: (state: TOffersState): TOfferPreview[] => state.offers,
    favoriteOffers: (state: TOffersState): TOfferPreview[] => state.favoriteOffers,
    offer: (state: TOffersState): TOffer | null => state.offer,
    nearbyOffers: (state: TOffersState): TOfferPreview[] => state.nearbyOffers,
    offersRequestStatus: (state: TOffersState): RequestStatus => state.offersRequestStatus,
    favoriteOffersRequestStatus: (state: TOffersState): RequestStatus => state.favoriteOffersRequestStatus,
    changeFavoriteOffersRequestStatus: (state: TOffersState): RequestStatus => state.changeFavoriteOffersRequestStatus,
    offerRequestStatus: (state: TOffersState): RequestStatus => state.offerRequestStatus,
    nearbyOffersRequestStatus: (state: TOffersState): RequestStatus => state.nearbyOffersRequestStatus,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.offersRequestStatus = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.offersRequestStatus = RequestStatus.Idle;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.offersRequestStatus = RequestStatus.Failed;
      })

      .addCase(fetchOffer.pending, (state) => {
        state.offerRequestStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offerRequestStatus = RequestStatus.Idle;
        state.offer = action.payload;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.offerRequestStatus = RequestStatus.Failed;
      })

      .addCase(fetchNearbyOffers.pending, (state) => {
        state.nearbyOffersRequestStatus = RequestStatus.Loading;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffersRequestStatus = RequestStatus.Idle;
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.nearbyOffersRequestStatus = RequestStatus.Failed;
      })


      .addCase(fetchFavorites.pending, (state) => {
        state.favoriteOffersRequestStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoriteOffersRequestStatus = RequestStatus.Idle;
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.favoriteOffersRequestStatus = RequestStatus.Failed;
      })

      .addCase(changeFavorite.pending, (state) => {
        state.changeFavoriteOffersRequestStatus = RequestStatus.Loading;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        const newOffer = action.payload.offer;

        if (action.payload.status === FavoriteStatus.Added) {
          state.favoriteOffers.push(newOffer);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter(({id}) => id !== newOffer.id);
        }
        state.changeFavoriteOffersRequestStatus = RequestStatus.Idle;
      })
      .addCase(changeFavorite.rejected, (state) => {
        state.changeFavoriteOffersRequestStatus = RequestStatus.Failed;
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
    (offers, city, sortType) => getProcessedOffers(offers, city, sortType)
  ),
  getFavoriteStatus: createSelector(
    offersSlice.selectors.favoriteOffers,
    (favoriteOffers) => (offerId: string) => checkFavoriteStatus(favoriteOffers, offerId)
  )
};

export {offersSlice, offersSliceActions, offersSliceSelectors};
