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
    changeCity: (state, action: PayloadAction<TCityName>) => {
      state.currentCity = action.payload;
    },

    changeCurrentOffer: (state, action: PayloadAction<string>) => {
      state.currentOffer = action.payload;
    },

    toggleSortingPanel: (state) => {
      state.isOffersSortingPanelOpen = !state.isOffersSortingPanelOpen;
    },

    changeOffersSortType: (state, action: PayloadAction<TOfferSortType>) => {
      state.currentOffersSortType = action.payload;
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
