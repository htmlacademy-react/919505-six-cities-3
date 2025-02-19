import {MockStore, configureMockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {Store} from './types/store';
import {Provider} from 'react-redux';
import {createAPI} from './services/api';
import {BrowserRouter} from 'react-router-dom';

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export function withStore(
  component: JSX.Element,
  initialState: Partial<Store> = {},
): ComponentWithMockStore {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const mockStoreCreator = configureMockStore();
  const mockStore = mockStoreCreator(initialState);

  return ({
    withStoreComponent: <BrowserRouter><Provider store={mockStore}>{component}</Provider></BrowserRouter>,
    mockStore,
    mockAxiosAdapter,
  });
}
