import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {withExtraArgument} from 'redux-thunk';
import { Action } from 'redux';
import {Store} from '../../../types/store';
import {createAPI} from '../../../services/api';
import {
  AppThunkDispatch, createMockReviewData, createMockReviewFromServer,
  createMockReviews,
  createMockStore,
  extraActionTypes,
  TEST_ID
} from '../../../mocks';
import {EndPoint} from '../../../const';
import {fetchReviews, postReview} from './reviews';

describe('reviews async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<Store, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator(createMockStore());
  });

  describe('fetchReviews', () => {
    it('Should dispatch "fetchReviews.pending" and "fetchReviews.fulfilled" with thunk "fetchReviews"', async() => {
      mockAxiosAdapter.onGet(`${EndPoint.Reviews}/${TEST_ID}`).reply(200, createMockReviews());
      await store.dispatch(fetchReviews(TEST_ID));
      const actions = extraActionTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviews.pending.type,
        fetchReviews.fulfilled.type,
      ]);
    });

    it('Should dispatch "fetchReviews.pending" and "fetchReviews.rejected" with server response 400', async() => {
      mockAxiosAdapter.onGet(`${EndPoint.Reviews}/${TEST_ID}`).reply(400);
      await store.dispatch(fetchReviews(TEST_ID));
      const actions = extraActionTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviews.pending.type,
        fetchReviews.rejected.type,
      ]);
    });
  });

  describe('postReview', () => {
    it('Should dispatch "postReview.pending" and "postReview.fulfilled" with thunk "postReview"', async() => {
      const mockResponse = createMockReviewFromServer();
      mockAxiosAdapter.onPost(`${EndPoint.Reviews}/${TEST_ID}`).reply(200, mockResponse, { token: 'secret' });
      await store.dispatch(postReview({id: TEST_ID, body: {comment: mockResponse.comment, rating: mockResponse.rating}}));
      const actions = extraActionTypes(store.getActions());

      expect(actions).toEqual([
        postReview.pending.type,
        postReview.fulfilled.type,
      ]);
    });

    it('Should dispatch "postReview.pending" and "postReview.rejected" with server response 400', async() => {
      mockAxiosAdapter.onPost(`${EndPoint.Reviews}/${TEST_ID}`).reply(400);
      await store.dispatch(postReview(createMockReviewData()));
      const actions = extraActionTypes(store.getActions());

      expect(actions).toEqual([
        postReview.pending.type,
        postReview.rejected.type,
      ]);
    });
  });
});
