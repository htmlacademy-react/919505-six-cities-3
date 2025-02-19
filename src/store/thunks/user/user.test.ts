import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {withExtraArgument} from 'redux-thunk';
import { Action } from 'redux';
import {Store} from '../../../types/store';
import {createAPI} from '../../../services/api';
import {AppThunkDispatch, createMockLoginData, createMockStore, extraActionTypes} from '../../../mocks';
import {EndPoint} from '../../../const';
import {checkAuth, login, logout} from './user';
import * as tokenStorage from '../../../services/token';

describe('user async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<Store, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator(createMockStore());
  });

  describe('checkAuth', () => {
    it('Should dispatch "checkAuth.pending" and "checkAuth.fulfilled" with thunk "checkAuth"', async() => {
      mockAxiosAdapter.onGet(EndPoint.Login).reply(200);
      await store.dispatch(checkAuth());
      const actions = extraActionTypes(store.getActions());

      expect(actions).toEqual([
        checkAuth.pending.type,
        checkAuth.fulfilled.type,
      ]);
    });

    it('Should dispatch "checkAuth.pending" and "checkAuth.rejected" with server response 400', async() => {
      mockAxiosAdapter.onGet(EndPoint.Login).reply(400);
      await store.dispatch(checkAuth());
      const actions = extraActionTypes(store.getActions());

      expect(actions).toEqual([
        checkAuth.pending.type,
        checkAuth.rejected.type,
      ]);
    });
  });

  describe('login', () => {
    it('Should dispatch "login.pending" and "login.rejected" with server response 400', async() => {
      mockAxiosAdapter.onPost(EndPoint.Login).reply(400);
      await store.dispatch(login(createMockLoginData()));
      const actions = extraActionTypes(store.getActions());

      expect(actions).toEqual([
        login.pending.type,
        login.rejected.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(EndPoint.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(login(createMockLoginData()));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });
  });

  describe('logout', () => {
    it('should dispatch "logout.pending", "logout.fulfilled" when server response 200', async() => {
      mockAxiosAdapter.onDelete(EndPoint.Logout).reply(204);

      await store.dispatch(logout());
      const actions = extraActionTypes(store.getActions());

      expect(actions).toEqual([
        logout.pending.type,
        logout.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(EndPoint.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'deleteToken');

      await store.dispatch(logout());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });
});
