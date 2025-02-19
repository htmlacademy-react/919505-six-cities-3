import {createAppAsyncThunk} from '../../../hooks/store/store';
import {TReview} from '../../../types/reviews';
import {TServerReview} from '../../../types/server-entities';
import {EndPoint} from '../../../const';

interface PostReviewsProps {
  body: {
    comment: string;
    rating: number;
  };
  id: string;
}

export const fetchReviews = createAppAsyncThunk<TReview[], string>
('reviews/fetch', async (offerId, {extra: api}) => {
  const response = await api.get<TServerReview[]>(`${EndPoint.Reviews}/${offerId}`);
  return response.data;
});

export const postReview = createAppAsyncThunk<TReview, PostReviewsProps>
('reviews/post', async ({body, id}, {extra: api}) => {
  const response = await api.post<TReview>(`${EndPoint.Reviews}/${id}`, body);
  return response.data;
});
