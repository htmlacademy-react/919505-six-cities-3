import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cities, NameSpace, SortingType} from '../../../const';
import {TCityName, TOfferSortType} from '../../../types/offers';
import {TAppProcessState} from '../../../types/state';

const initialState: TAppProcessState = {
  currentCity: Cities[0],
  activeOfferId: null,
  currentOffersSortType: SortingType.POPULAR
};

const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<TCityName>) => {
      state.currentCity = action.payload;
    },

    changeActiveOfferId: (state, action: PayloadAction<string | null>) => {
      state.activeOfferId = action.payload;
    },

    changeOffersSortType: (state, action: PayloadAction<TOfferSortType>) => {
      state.currentOffersSortType = action.payload;
    }
  },

  selectors: {
    currentCity: (state: TAppProcessState): TCityName => state.currentCity,
    activeOfferId: (state: TAppProcessState): string | null => state.activeOfferId,
    currentOffersSortType: (state: TAppProcessState): TOfferSortType => state.currentOffersSortType,
  }
});

const appSliceActions = appSlice.actions;
const appSliceSelectors = appSlice.selectors;

export {appSlice, appSliceActions, appSliceSelectors};
