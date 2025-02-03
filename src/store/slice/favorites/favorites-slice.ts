import {createSlice} from '@reduxjs/toolkit';
import {FavoriteStatus, NameSpace, RequestStatus} from '../../../common/const';
import {TFavoritesState} from '../../../types/state';
import {TOfferPreview} from '../../../types/offers';
import {changeFavorite, fetchFavorites} from '../../thunks/favorites';

const initialState: TFavoritesState = {
  offers: [],
  requestStatus: RequestStatus.Idle
};

const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  selectors: {
    offers: (state: TFavoritesState): TOfferPreview[] => state.offers
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(changeFavorite.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        switch (action.payload.status) {
          case FavoriteStatus.Added:
            state.offers.push(action.payload.offer);
            break;
          case FavoriteStatus.Removed:
            state.offers = state.offers.filter(({id}) => id !== action.payload.offer.id);
        }

        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(changeFavorite.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
});

const favoritesSliceActions = {
  ...favoritesSlice.actions,
  fetchFavorites,
  changeFavorite
};

const favoritesSliceSelectors = favoritesSlice.selectors;

export {favoritesSlice, favoritesSliceActions, favoritesSliceSelectors};
