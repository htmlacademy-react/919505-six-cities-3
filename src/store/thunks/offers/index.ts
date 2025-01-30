import {createAsyncThunk} from '@reduxjs/toolkit';
import {TServerOfferPreview} from '../../../types/server';
import {AxiosInstance} from 'axios';
import {EndPoint} from '../../../common/const';
import {adaptOfferPreviewsToApp} from '../../../common/adapters';

export const fetchAllOffers = createAsyncThunk<TServerOfferPreview[], void, {extra: AxiosInstance}>
('fetchOffers/all', async (_arg, {extra: api}) => {
  const response = await api.get<TServerOfferPreview[]>(EndPoint.Offers);
  return adaptOfferPreviewsToApp(response.data);
});
