import {TServerOffer, TServerOfferPreview, TServerReview} from '../../../types/server';
import {EndPoint} from '../../../common/const';
import {adaptOfferPreviewsToApp, adaptOfferToApp, adaptReviewsToApp} from '../../../common/adapters';
import {createAppAsyncThunk} from '../../../hooks/store';
import {TReview} from '../../../types/reviews';
import {TOffer} from '../../../types/offers';

interface PostReviewsProps {
  body: {
    review: string;
    rating: number;
  };
  offerId: string;
}

export const fetchAllOffers = createAppAsyncThunk<TServerOfferPreview[], undefined>
('fetchOffers/all', async (_arg, {extra: api}) => {
  const response = await api.get<TServerOfferPreview[]>(EndPoint.Offers);
  return adaptOfferPreviewsToApp(response.data);
});

export const fetchOffer = createAppAsyncThunk<TOffer, string>
('fetchOffers/current', async (offerId, {extra: api}) => {
  const response = await api.get<TServerOffer>(`${EndPoint.Offers}/${offerId}`);
  return adaptOfferToApp(response.data);
});

export const fetchNearbyOffers = createAppAsyncThunk<TServerOfferPreview[], string>
('fetchOffers/nearby', async (offerId, {extra: api}) => {
  const response = await api.get<TServerOfferPreview[]>(`${EndPoint.Offers}/${offerId}/nearby`);
  return adaptOfferPreviewsToApp(response.data);
});

export const fetchReviews = createAppAsyncThunk<TReview[], string>
('reviews/fetch', async (offerId, {extra: api}) => {
  const response = await api.get<TServerReview[]>(`${EndPoint.Reviews}/${offerId}`);
  return adaptReviewsToApp(response.data);
});

export const postReview = createAppAsyncThunk<TReview, PostReviewsProps>
('reviews/post', async ({body, offerId}, {extra: api}) => {
  const response = await api.post<TReview>(`${EndPoint.Reviews}/${offerId}`, body);
  return response.data;
});
