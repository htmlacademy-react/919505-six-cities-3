import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cities, NameSpace, SortingType} from '../../common/const';
import {TCityName, TOfferSortType} from '../../types/offers';
import {TAppProcessState} from '../../types/state';

const initialState: TAppProcessState = {
  currentCity: Cities[0],
  currentOffer: null,
  hoveredOffer: null,
  isOffersSortingPanelOpen: false,
  currentOffersSortType: SortingType.POPULAR
};

const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<TCityName>) => {
      state.currentCity = action.payload;
    },

    changeCurrentOffer: (state, action: PayloadAction<string>) => {
      state.currentOffer = action.payload;
    },

    changeHoveredOffer: (state, action: PayloadAction<string | null>) => {
      state.hoveredOffer = action.payload;
    },

    toggleSortingPanel: (state) => {
      state.isOffersSortingPanelOpen = !state.isOffersSortingPanelOpen;
    },

    changeOffersSortType: (state, action: PayloadAction<TOfferSortType>) => {
      state.currentOffersSortType = action.payload;
      state.isOffersSortingPanelOpen = false;
    }
  },

  selectors: {
    currentCity: (state: TAppProcessState): TCityName => state.currentCity,
    currentOffer: (state: TAppProcessState): string | null => state.currentOffer,
    hoveredOffer: (state: TAppProcessState): string | null => state.hoveredOffer,
    isOffersSortingPanelOpen: (state: TAppProcessState): boolean => state.isOffersSortingPanelOpen,
    currentOffersSortType: (state: TAppProcessState): TOfferSortType => state.currentOffersSortType,
  }
});

const appProcessActions = appProcess.actions;
const appProcessSelectors = appProcess.selectors;

export {appProcess, appProcessActions, appProcessSelectors};
