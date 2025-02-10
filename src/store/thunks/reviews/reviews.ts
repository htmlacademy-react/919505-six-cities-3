import {createAppAsyncThunk} from '../../../hooks/store/store';
import {TReview} from '../../../types/reviews';
import {TServerReview} from '../../../types/server';
import {EndPoint} from '../../../const';
import {adaptReviewsToApp} from '../../../services/adapters';

interface PostReviewsProps {
  body: {
    comment: string;
    rating: number;
  };
  offerId: string;
}

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
