import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cities, NameSpace} from '../../utils/const';

type TAppState = {
  currentCity: string;
}

const initialState: TAppState = {
  currentCity: Cities[0]
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: string}>) => {
      const {city} = action.payload;
      state.currentCity = city;
    }
  }
});

export const {changeCity} = appProcess.actions;
