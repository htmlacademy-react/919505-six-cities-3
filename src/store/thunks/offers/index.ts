import {TServerOffer, TServerOfferPreview} from '../../../types/server';
import {EndPoint} from '../../../common/const';
import {adaptOfferPreviewsToApp, adaptOfferToApp} from '../../../common/adapters';
import {createAppAsyncThunk} from '../../../hooks/store';
import {TOffer} from '../../../types/offers';

export const fetchAllOffers = createAppAsyncThunk<TServerOfferPreview[], undefined>
('offers/fetchAll', async (_arg, {extra: api}) => {
  const response = await api.get<TServerOfferPreview[]>(EndPoint.Offers);
  return adaptOfferPreviewsToApp(response.data);
});

export const fetchOffer = createAppAsyncThunk<TOffer, string>
('offers/fetchCurrent', async (offerId, {extra: api}) => {
  const response = await api.get<TServerOffer>(`${EndPoint.Offers}/${offerId}`);
  return adaptOfferToApp(response.data);
});

export const fetchNearbyOffers = createAppAsyncThunk<TServerOfferPreview[], string>
('offers/fetchNearby', async (offerId, {extra: api}) => {
  const response = await api.get<TServerOfferPreview[]>(`${EndPoint.Offers}/${offerId}/nearby`);
  return adaptOfferPreviewsToApp(response.data);
});
