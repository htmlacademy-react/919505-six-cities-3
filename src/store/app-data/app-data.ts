import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../utils/const';
import {TOfferPreview} from '../../utils/types';
import {offerPreviews} from '../../mocks/offer-previews';

type TAppState = {
  offers: TOfferPreview[];
}

const initialState: TAppState = {
  offers: offerPreviews
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {}
});
