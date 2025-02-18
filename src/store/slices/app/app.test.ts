import {appSlice, appSliceActions, appSliceSelectors} from './';
import {Cities, NameSpace, SortingType} from '../../../const';
import {TAppProcessState} from '../../../types/store';

const defaultState: TAppProcessState = {
  currentCity: Cities[0],
  activeOfferId: null,
  currentOffersSortType: SortingType.POPULAR
};

describe('appSlice reducer', () => {
  const testCity = Cities[1];
  const testOfferId = 'testOfferId';

  const {
    changeCity,
    changeActiveOfferId,
    changeOffersSortType
  } = appSliceActions;

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = defaultState;
    const result = appSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = defaultState;
    const result = appSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return new state based on given city name', () => {
    const initialSate = defaultState;
    const expectedState = {currentCity: testCity, activeOfferId: null, currentOffersSortType: SortingType.POPULAR};
    const result = appSlice.reducer(initialSate, changeCity(testCity));
    expect(result).toEqual(expectedState);
  });

  it('should return new state based on given active offer ID', () => {
    const initialSate = defaultState;
    const expectedState = {currentCity: Cities[0], activeOfferId: testOfferId, currentOffersSortType: SortingType.POPULAR};
    const result = appSlice.reducer(initialSate, changeActiveOfferId(testOfferId));
    expect(result).toEqual(expectedState);
  });

  it('should return new state based on given active sorting type', () => {
    const initialSate = defaultState;
    const expectedState = {currentCity: Cities[0], activeOfferId: null, currentOffersSortType: SortingType.TOP_RATED_FIRST};
    const result = appSlice.reducer(initialSate, changeOffersSortType(SortingType.TOP_RATED_FIRST));
    expect(result).toEqual(expectedState);
  });
});

describe('appSlice selectors', () => {
  const state = {
    [NameSpace.App]: {
      currentCity: Cities[1],
      activeOfferId: 'testOfferId',
      currentOffersSortType: SortingType.LOW_TO_HIGH
    }
  };

  const {
    currentCity,
    activeOfferId,
    currentOffersSortType
  } = appSliceSelectors;

  it('should return current city from state', () => {
    const city = state[NameSpace.App].currentCity;
    const result = currentCity(state);
    expect(result).toBe(city);
  });

  it('should return active offer ID from state', () => {
    const offerId = state[NameSpace.App].activeOfferId;
    const result = activeOfferId(state);
    expect(result).toBe(offerId);
  });

  it('should return current sorting type from state', () => {
    const sortType = state[NameSpace.App].currentOffersSortType;
    const result = currentOffersSortType(state);
    expect(result).toBe(sortType);
  });
});
