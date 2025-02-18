import {reviewsSlice, reviewsSliceSelectors} from './';
import {NameSpace, RequestStatus} from '../../../const';
import {TReviewsState} from '../../../types/store';
import {createMockReview, createMockReviewData, createMockReviews,} from '../../../mocks';
import {fetchReviews, postReview} from '../../thunks/reviews';

const defaultState: TReviewsState = {
  reviews: [],
  postReviewRequestStatus: RequestStatus.Idle,
  fetchReviewsRequestStatus: RequestStatus.Idle
};

describe('reviewsSlice reducer', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = defaultState;
    const result = reviewsSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = defaultState;
    const result = reviewsSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should update "reviews" with data and set "fetchReviewsRequestStatus" to "Idle" with "fetchReviews.fulfilled"', () => {
    const mockReviews = createMockReviews();
    const expectedState = {
      reviews: mockReviews,
      postReviewRequestStatus: RequestStatus.Idle,
      fetchReviewsRequestStatus: RequestStatus.Idle
    };
    const result = reviewsSlice.reducer(undefined, fetchReviews.fulfilled(mockReviews, '', ''));
    expect(result).toEqual(expectedState);
  });

  it('should set "fetchReviewsRequestStatus" to "Failed" with "fetchReviews.rejected"', () => {
    const expectedState = {
      reviews: [],
      postReviewRequestStatus: RequestStatus.Idle,
      fetchReviewsRequestStatus: RequestStatus.Failed
    };
    const result = reviewsSlice.reducer(undefined, fetchReviews.rejected(null, '', ''));
    expect(result).toEqual(expectedState);
  });

  it('should set "postReviewRequestStatus" to "Loading" with "postReview.pending"', () => {
    const mockReviewData = createMockReviewData();
    const expectedState = {
      reviews: [],
      postReviewRequestStatus: RequestStatus.Loading,
      fetchReviewsRequestStatus: RequestStatus.Idle
    };
    const result = reviewsSlice.reducer(undefined, postReview.pending('', mockReviewData));
    expect(result).toEqual(expectedState);
  });

  it('should update "reviews" with data and set "postReviewRequestStatus" to "Success" with "postReview.fulfilled"', () => {
    const mockReview = createMockReview();
    const mockReviewData = createMockReviewData();
    const expectedState = {
      reviews: [mockReview],
      postReviewRequestStatus: RequestStatus.Success,
      fetchReviewsRequestStatus: RequestStatus.Idle
    };
    const result = reviewsSlice.reducer(undefined, postReview.fulfilled(mockReview, '', mockReviewData));
    expect(result).toEqual(expectedState);
  });

  it('should set "postReviewRequestStatus" to "Failed" with "postReview.rejected"', () => {
    const mockReviewData = createMockReviewData();
    const expectedState = {
      reviews: [],
      postReviewRequestStatus: RequestStatus.Failed,
      fetchReviewsRequestStatus: RequestStatus.Idle
    };
    const result = reviewsSlice.reducer(undefined, postReview.rejected(null, '', mockReviewData));
    expect(result).toEqual(expectedState);
  });


});

describe('reviewsSlice selectors', () => {
  const state = {
    [NameSpace.Reviews]: {
      reviews: createMockReviews(),
      postReviewRequestStatus: RequestStatus.Idle,
      fetchReviewsRequestStatus: RequestStatus.Failed
    }
  };

  const {
    reviews,
    postReviewRequestStatus,
    fetchReviewsRequestStatus,
  } = reviewsSliceSelectors;

  it('should return current reviews from state', () => {
    const currentReviews = state[NameSpace.Reviews].reviews;
    const result = reviews(state);
    expect(result).toBe(currentReviews);
  });

  it('should return current post status from state', () => {
    const currentStatus = state[NameSpace.Reviews].postReviewRequestStatus;
    const result = postReviewRequestStatus(state);
    expect(result).toBe(currentStatus);
  });

  it('should return current fetch status from state', () => {
    const currentStatus = state[NameSpace.Reviews].fetchReviewsRequestStatus;
    const result = fetchReviewsRequestStatus(state);
    expect(result).toBe(currentStatus);
  });
});
