import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../common/const';
import {TAppDataState} from '../../types/state';
import {offerPreviews} from '../../mocks/offer-previews';

const initialState: TAppDataState = {
  offers: offerPreviews
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {}
});
