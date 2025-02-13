import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../../const';
import {TReviewsState} from '../../../types/store';
import {fetchReviews, postReview} from '../../thunks/reviews';
import {TReview} from '../../../types/reviews';

const initialState: TReviewsState = {
  reviews: [],
  postReviewRequestStatus: RequestStatus.Idle,
  fetchReviewsRequestStatus: RequestStatus.Idle
};

const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  selectors: {
    reviews: (state: TReviewsState): TReview[] => state.reviews,
    postReviewRequestStatus: (state: TReviewsState): RequestStatus => state.postReviewRequestStatus,
    fetchReviewsRequestStatus: (state: TReviewsState): RequestStatus => state.fetchReviewsRequestStatus,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.fetchReviewsRequestStatus = RequestStatus.Idle;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.fetchReviewsRequestStatus = RequestStatus.Failed;
      })
      .addCase(postReview.pending, (state) => {
        state.postReviewRequestStatus = RequestStatus.Loading;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.postReviewRequestStatus = RequestStatus.Success;
        state.reviews.unshift(action.payload);
      })
      .addCase(postReview.rejected, (state) => {
        state.postReviewRequestStatus = RequestStatus.Failed;
      })
});

const reviewsSliceActions = {
  ...reviewsSlice.actions,
  fetchReviews,
  postReview
};

const reviewsSliceSelectors = reviewsSlice.selectors;

export {reviewsSlice, reviewsSliceActions, reviewsSliceSelectors};
