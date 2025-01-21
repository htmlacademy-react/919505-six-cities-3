import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cities, NameSpace} from '../../utils/const';
import {TCityName} from '../../utils/types';

type TAppState = {
  currentCity: TCityName;
  currentOffer: string | null;
}

const initialState: TAppState = {
  currentCity: Cities[0],
  currentOffer: null
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
    }
  }
});

export const {changeCity, changeCurrentOffer} = appProcess.actions;
