import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cities, NameSpace, SortingTypes} from '../../common/const';
import {TCityName, TOfferSortType} from '../../types/offers';
import {TAppProcessState} from '../../types/state';

const initialState: TAppProcessState = {
  currentCity: Cities[0],
  currentOffer: null,
  isOffersSortingPanelOpen: false,
  currentOffersSortType: SortingTypes.POPULAR
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: TCityName}>) => {
      const {city} = action.payload;
      state.currentCity = city;
    },

    changeCurrentOffer: (state, action: PayloadAction<{offerId: string}>) => {
      const {offerId} = action.payload;
      state.currentOffer = offerId;
    },

    toggleSortingPanel: (state) => {
      state.isOffersSortingPanelOpen = !state.isOffersSortingPanelOpen;
    },

    changeOffersSortType: (state, action: PayloadAction<{sortType: TOfferSortType}>) => {
      const {sortType} = action.payload;
      state.currentOffersSortType = sortType;
      state.isOffersSortingPanelOpen = false;
    }
  }
});

export const {
  changeCity,
  changeCurrentOffer,
  changeOffersSortType,
  toggleSortingPanel
} = appProcess.actions;
