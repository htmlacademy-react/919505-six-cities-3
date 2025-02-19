import {offersSlice, offersSliceActions, offersSliceSelectors} from './';
import {Cities, FavoriteStatus, NameSpace, RequestStatus, SortingType} from '../../../const';
import {TOffersState} from '../../../types/store';
import {fetchAllOffers, fetchNearbyOffers, fetchOffer} from '../../thunks/offers';
import {createMockOffer, createMockOfferPreview, createMockOfferPreviews, TEST_ID} from '../../../mocks';
import {checkFavoriteStatus, getProcessedOffers} from './utils';
import {changeFavorite, fetchFavorites} from '../../thunks/favorites';

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

  describe('fetchAllOffers', () => {
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
      const result = offersSlice.reducer(undefined, fetchAllOffers.pending(testOfferId, undefined));
      expect(result).toEqual(expectedState);
    });

    it('should update "offers" with data and set "offersRequestStatus" to "Idle" with "fetchAllOffers.fulfilled"', () => {
      const mockOffers = createMockOfferPreviews();
      const expectedState = {
        offers: mockOffers,
        favoriteOffers: [],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, fetchAllOffers.fulfilled(mockOffers, '', undefined));
      expect(result).toEqual(expectedState);
    });

    it('should set "offersRequestStatus" to "Failed" with "fetchAllOffers.rejected"', () => {
      const expectedState = {
        offers: [],
        favoriteOffers: [],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Failed,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, fetchAllOffers.rejected(null, '', undefined));
      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchOffer', () => {
    it('should set "offerRequestStatus" to "Loading" with "fetchOffer.pending"', () => {
      const expectedState = {
        offers: [],
        favoriteOffers: [],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Loading,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, fetchOffer.pending(testOfferId, '', undefined));
      expect(result).toEqual(expectedState);
    });

    it('should update "offer" with data and set "offerRequestStatus" to "Idle" with "fetchOffer.fulfilled"', () => {
      const mockOffer = createMockOffer();
      const expectedState = {
        offers: [],
        favoriteOffers: [],
        offer: mockOffer,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, fetchOffer.fulfilled(mockOffer, '', ''));
      expect(result).toEqual(expectedState);
    });

    it('should set "offerRequestStatus" to "Failed" with "fetchOffer.rejected"', () => {
      const expectedState = {
        offers: [],
        favoriteOffers: [],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Failed,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, fetchOffer.rejected(null, '', ''));
      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchNearbyOffers', () => {
    it('should set "nearbyOffersRequestStatus" to "Loading" with "fetchNearbyOffers.pending"', () => {
      const expectedState = {
        offers: [],
        favoriteOffers: [],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Loading,
      };
      const result = offersSlice.reducer(undefined, fetchNearbyOffers.pending(testOfferId, '', undefined));
      expect(result).toEqual(expectedState);
    });

    it('should update "nearbyOffers" with data and set "nearbyOffersRequestStatus" to "Idle" with "fetchNearbyOffers.fulfilled"', () => {
      const mockOffers = createMockOfferPreviews();
      const expectedState = {
        offers: [],
        favoriteOffers: [],
        offer: null,
        nearbyOffers: mockOffers,

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, fetchNearbyOffers.fulfilled(mockOffers, '', ''));
      expect(result).toEqual(expectedState);
    });

    it('should set "nearbyOffersRequestStatus" to "Failed" with "fetchNearbyOffers.rejected"', () => {
      const expectedState = {
        offers: [],
        favoriteOffers: [],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Failed,
      };
      const result = offersSlice.reducer(undefined, fetchNearbyOffers.rejected(null, '', ''));
      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchFavorites', () => {
    it('should set "favoriteOffersRequestStatus" to "Loading" with "fetchFavorites.pending"', () => {
      const expectedState = {
        offers: [],
        favoriteOffers: [],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Loading,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, fetchFavorites.pending(testOfferId, undefined));
      expect(result).toEqual(expectedState);
    });

    it('should update "favoriteOffers" with data and set "favoriteOffersRequestStatus" to "Idle" with "fetchFavorites.fulfilled"', () => {
      const mockOffers = createMockOfferPreviews();
      const expectedState = {
        offers: [],
        favoriteOffers: mockOffers,
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, fetchFavorites.fulfilled(mockOffers, '', undefined));
      expect(result).toEqual(expectedState);
    });

    it('should set "favoriteOffersRequestStatus" to "Failed" with "fetchFavorites.rejected"', () => {
      const expectedState = {
        offers: [],
        favoriteOffers: [],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Failed,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, fetchFavorites.rejected(null, '', undefined));
      expect(result).toEqual(expectedState);
    });
  });

  describe('changeFavorite', () => {
    it('should set "changeFavoriteOffersRequestStatus" to "Loading" with "changeFavorite.pending"', () => {
      const expectedState = {
        offers: [],
        favoriteOffers: [],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Loading,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, changeFavorite.pending('', {offerId: TEST_ID, status: FavoriteStatus.Added}));
      expect(result).toEqual(expectedState);
    });

    it('should update "favoriteOffers" with new card and set "changeFavoriteOffersRequestStatus" to "Idle" with "changeFavorite.fulfilled"', () => {
      const mockFavoriteOffer = createMockOfferPreview(true);
      const expectedState = {
        offers: [],
        favoriteOffers: [mockFavoriteOffer],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, changeFavorite.fulfilled({offer: mockFavoriteOffer, status: FavoriteStatus.Added}, '',{offerId: TEST_ID, status: FavoriteStatus.Added}));
      expect(result).toEqual(expectedState);
    });

    it('should remove card from "favoriteOffers" and set "changeFavoriteOffersRequestStatus" to "Idle" with "changeFavorite.fulfilled"', () => {
      const mockFavoriteOffer = createMockOfferPreview();
      const initialState = {
        offers: [],
        favoriteOffers: [mockFavoriteOffer],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Idle,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const expectedState = {
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
      const result = offersSlice.reducer(initialState, changeFavorite.fulfilled({offer: mockFavoriteOffer, status: FavoriteStatus.Removed},'',{offerId: TEST_ID, status: FavoriteStatus.Removed}));
      expect(result).toEqual(expectedState);
    });

    it('should set "changeFavoriteOffersRequestStatus" to "Failed" with "changeFavorite.rejected"', () => {
      const expectedState = {
        offers: [],
        favoriteOffers: [],
        offer: null,
        nearbyOffers: [],

        offersRequestStatus: RequestStatus.Idle,
        favoriteOffersRequestStatus: RequestStatus.Idle,
        changeFavoriteOffersRequestStatus: RequestStatus.Failed,
        offerRequestStatus: RequestStatus.Idle,
        nearbyOffersRequestStatus: RequestStatus.Idle,
      };
      const result = offersSlice.reducer(undefined, changeFavorite.rejected(null, '', {offerId: TEST_ID, status: FavoriteStatus.Added}));
      expect(result).toEqual(expectedState);
    });
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
      activeOfferId: TEST_ID,
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
    getFavoriteStatus
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

  it('should return favorite status of the offer', () => {
    const currentFavoriteOffers = state[NameSpace.Offers].favoriteOffers;
    const result = getFavoriteStatus(state)(TEST_ID);
    expect(result).toBe(checkFavoriteStatus(currentFavoriteOffers, TEST_ID));
  });
});
