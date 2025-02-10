import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../../const';
import {TReviewsState} from '../../../types/state';
import {fetchReviews, postReview} from '../../thunks/reviews';
import {TReview} from '../../../types/reviews';

const initialState: TReviewsState = {
  reviews: [],
  requestStatus: RequestStatus.Idle
};

const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  selectors: {
    reviews: (state: TReviewsState): TReview[] => state.reviews,
    requestStatus: (state: TReviewsState): RequestStatus => state.requestStatus,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Idle;
        state.reviews = action.payload;
      })
      .addCase(postReview.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.reviews.push(action.payload);
      })
      .addCase(postReview.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
});

const reviewsSliceActions = {
  ...reviewsSlice.actions,
  fetchReviews,
  postReview
};

const reviewsSliceSelectors = reviewsSlice.selectors;

export {reviewsSlice, reviewsSliceActions, reviewsSliceSelectors};
