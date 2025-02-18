import {offersSlice, offersSliceActions, offersSliceSelectors} from './';
import {Cities, NameSpace, RequestStatus, SortingType} from '../../../const';
import {TOffersState} from '../../../types/store';
import {fetchAllOffers} from '../../thunks/offers';
import {createMockOffer, createMockOfferPreviews} from '../../../mocks';
import {getProcessedOffers} from './utils';

const defaultState: TOffersState = {
  offers: [],
  favoriteOffers: [],
  offer: null,
  nearbyOffers: [],

  offersRequestStatus: RequestStatus.Idle,
  favoriteOffersRequestStatus: RequestStatus.Idle,
  changeFavoriteOffersRequestStatus: RequestStatus.Idle,
  offerRequestStatus: RequestStatus.Idle,
  nearbyOffersRequestStatus: RequestStatus.Idle,
};

describe('offersSlice reducer', () => {
  const testOfferId = 'testOfferId';

  const {clearFavoriteOffers} = offersSliceActions;

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = defaultState;
    const result = offersSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = defaultState;
    const result = offersSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should clear favorites array', () => {
    const initialSate = {
      offers: [],
      favoriteOffers: createMockOfferPreviews(),
      offer: null,
      nearbyOffers: [],

      offersRequestStatus: RequestStatus.Idle,
      favoriteOffersRequestStatus: RequestStatus.Idle,
      changeFavoriteOffersRequestStatus: RequestStatus.Idle,
      offerRequestStatus: RequestStatus.Idle,
      nearbyOffersRequestStatus: RequestStatus.Idle,
    };
    const expectedState = defaultState;
    const result = offersSlice.reducer(initialSate, clearFavoriteOffers());
    expect(result).toEqual(expectedState);
  });

  it('should set "offersRequestStatus" to "Loading" with "fetchAllOffers.pending"', () => {
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      offer: null,
      nearbyOffers: [],

      offersRequestStatus: RequestStatus.Loading,
      favoriteOffersRequestStatus: RequestStatus.Idle,
      changeFavoriteOffersRequestStatus: RequestStatus.Idle,
      offerRequestStatus: RequestStatus.Idle,
      nearbyOffersRequestStatus: RequestStatus.Idle,
    };
    const result = offersSlice.reducer(defaultState, fetchAllOffers.pending(testOfferId, undefined));
    expect(result).toEqual(expectedState);
  });

  it('should set "offersRequestStatus" to "Loading" with "fetchAllOffers.pending"', () => {
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      offer: null,
      nearbyOffers: [],

      offersRequestStatus: RequestStatus.Loading,
      favoriteOffersRequestStatus: RequestStatus.Idle,
      changeFavoriteOffersRequestStatus: RequestStatus.Idle,
      offerRequestStatus: RequestStatus.Idle,
      nearbyOffersRequestStatus: RequestStatus.Idle,
    };
    const result = offersSlice.reducer(defaultState, fetchAllOffers.pending('testOfferId', undefined));
    expect(result).toEqual(expectedState);
  });
});

describe('offersSlice selectors', () => {
  const state = {
    [NameSpace.Offers]: {
      offers: createMockOfferPreviews(),
      favoriteOffers: createMockOfferPreviews(),
      offer: createMockOffer(),
      nearbyOffers: createMockOfferPreviews(),

      offersRequestStatus: RequestStatus.Idle,
      favoriteOffersRequestStatus: RequestStatus.Idle,
      changeFavoriteOffersRequestStatus: RequestStatus.Idle,
      offerRequestStatus: RequestStatus.Idle,
      nearbyOffersRequestStatus: RequestStatus.Idle,
    },
    [NameSpace.App]: {
      currentCity: Cities[1],
      activeOfferId: 'testOfferId',
      currentOffersSortType: SortingType.LOW_TO_HIGH
    }
  };

  const {
    offers,
    favoriteOffers,
    offer,
    nearbyOffers,
    offersRequestStatus,
    favoriteOffersRequestStatus,
    changeFavoriteOffersRequestStatus,
    offerRequestStatus,
    nearbyOffersRequestStatus,
    currentCitySortedOffers,
  } = offersSliceSelectors;

  it('should return current offers from state', () => {
    const currentOffers = state[NameSpace.Offers].offers;
    const result = offers(state);
    expect(result).toBe(currentOffers);
  });

  it('should return favorite offers from state', () => {
    const currentFavoriteOffers = state[NameSpace.Offers].favoriteOffers;
    const result = favoriteOffers(state);
    expect(result).toBe(currentFavoriteOffers);
  });

  it('should return current offer from state', () => {
    const currentOffer = state[NameSpace.Offers].offer;
    const result = offer(state);
    expect(result).toBe(currentOffer);
  });

  it('should return nearby offers from state', () => {
    const currentNearbyOffers = state[NameSpace.Offers].nearbyOffers;
    const result = nearbyOffers(state);
    expect(result).toBe(currentNearbyOffers);
  });

  it('should return offers request status from state', () => {
    const requestStatus = state[NameSpace.Offers].offersRequestStatus;
    const result = offersRequestStatus(state);
    expect(result).toBe(requestStatus);
  });

  it('should return change favorite offers request status from state', () => {
    const requestStatus = state[NameSpace.Offers].changeFavoriteOffersRequestStatus;
    const result = changeFavoriteOffersRequestStatus(state);
    expect(result).toBe(requestStatus);
  });

  it('should return favorite offers request status from state', () => {
    const requestStatus = state[NameSpace.Offers].favoriteOffersRequestStatus;
    const result = favoriteOffersRequestStatus(state);
    expect(result).toBe(requestStatus);
  });

  it('should return offer request status from state', () => {
    const requestStatus = state[NameSpace.Offers].offerRequestStatus;
    const result = offerRequestStatus(state);
    expect(result).toBe(requestStatus);
  });

  it('should return nearby offers request status from state', () => {
    const requestStatus = state[NameSpace.Offers].nearbyOffersRequestStatus;
    const result = nearbyOffersRequestStatus(state);
    expect(result).toBe(requestStatus);
  });

  it('should return offers filtered by city and sorted by current sort type', () => {
    const currentOffers = state[NameSpace.Offers].offers;
    const currentCity = state[NameSpace.App].currentCity;
    const currentSortType = state[NameSpace.App].currentOffersSortType;
    const result = currentCitySortedOffers(state);
    expect(result).toStrictEqual(getProcessedOffers(currentOffers, currentCity, currentSortType));
  });
});
