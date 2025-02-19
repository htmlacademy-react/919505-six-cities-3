import {userSlice, userSliceSelectors} from './';
import {AuthorizationStatus, NameSpace, RequestStatus} from '../../../const';
import {TUserState} from '../../../types/store';
import {createMockLoginData, createMockUser} from '../../../mocks/mocks';
import {checkAuth, login, logout} from '../../thunks/user';

const defaultState: TUserState = {
  info: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userRequestStatus: RequestStatus.Idle
};

describe('userSlice reducer', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = defaultState;
    const result = userSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = defaultState;
    const result = userSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set "userRequestStatus" to "Loading" with "checkAuth.pending"', () => {
    const expectedState = {
      info: null,
      authorizationStatus: AuthorizationStatus.Unknown,
      userRequestStatus: RequestStatus.Loading
    };
    const result = userSlice.reducer(undefined, checkAuth.pending('', undefined));
    expect(result).toEqual(expectedState);
  });

  it('should update "info" with data, set "authorizationStatus" to "Auth and "userRequestStatus" to "Success" with "checkAuth.fulfilled"', () => {
    const mockUser = createMockUser();
    const expectedState = {
      info: mockUser,
      authorizationStatus: AuthorizationStatus.Auth,
      userRequestStatus: RequestStatus.Success
    };
    const result = userSlice.reducer(undefined, checkAuth.fulfilled(mockUser, '', undefined));
    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "NoAuth and "userRequestStatus" to "Failed" with "checkAuth.rejected"', () => {
    const expectedState = {
      info: null,
      authorizationStatus: AuthorizationStatus.NoAuth,
      userRequestStatus: RequestStatus.Failed
    };
    const result = userSlice.reducer(undefined, checkAuth.rejected(null, '', undefined));
    expect(result).toEqual(expectedState);
  });

  it('should set "userRequestStatus" to "Loading" with "login.pending"', () => {
    const mockLoginData = createMockLoginData();
    const expectedState = {
      info: null,
      authorizationStatus: AuthorizationStatus.Unknown,
      userRequestStatus: RequestStatus.Loading
    };
    const result = userSlice.reducer(undefined, login.pending('', mockLoginData));
    expect(result).toEqual(expectedState);
  });

  it('should update "info" with data, set "authorizationStatus" to "Auth and "userRequestStatus" to "Success" with "login.fulfilled"', () => {
    const mockLoginData = createMockLoginData();
    const mockUser = createMockUser();
    const expectedState = {
      info: mockUser,
      authorizationStatus: AuthorizationStatus.Auth,
      userRequestStatus: RequestStatus.Success
    };
    const result = userSlice.reducer(undefined, login.fulfilled(mockUser, '', mockLoginData));
    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "NoAuth and "userRequestStatus" to "Failed" with "login.rejected"', () => {
    const mockLoginData = createMockLoginData();
    const expectedState = {
      info: null,
      authorizationStatus: AuthorizationStatus.NoAuth,
      userRequestStatus: RequestStatus.Failed
    };
    const result = userSlice.reducer(undefined, login.rejected(null, '', mockLoginData));
    expect(result).toEqual(expectedState);
  });

  it('should reset "info" to "null", set "authorizationStatus" to "NoAuth and "userRequestStatus" to "Idle" with "logout.fulfilled"', () => {
    const mockUser = createMockUser();
    const initialState = {
      info: mockUser,
      authorizationStatus: AuthorizationStatus.Auth,
      userRequestStatus: RequestStatus.Idle
    };

    const expectedState = {
      info: null,
      authorizationStatus: AuthorizationStatus.NoAuth,
      userRequestStatus: RequestStatus.Idle
    };
    const result = userSlice.reducer(initialState, logout.fulfilled(mockUser, '', undefined));
    expect(result).toEqual(expectedState);
  });
});

describe('userSlice selectors', () => {
  const state = {
    [NameSpace.User]: {
      info: createMockUser(),
      authorizationStatus: AuthorizationStatus.Auth,
      userRequestStatus: RequestStatus.Success
    }
  };

  const {
    info,
    authorizationStatus,
    userRequestStatus,
  } = userSliceSelectors;

  it('should return current user info from state', () => {
    const currentInfo = state[NameSpace.User].info;
    const result = info(state);
    expect(result).toBe(currentInfo);
  });

  it('should return current auth status from state', () => {
    const currentStatus = state[NameSpace.User].authorizationStatus;
    const result = authorizationStatus(state);
    expect(result).toBe(currentStatus);
  });

  it('should return current login status from state', () => {
    const currentStatus = state[NameSpace.User].userRequestStatus;
    const result = userRequestStatus(state);
    expect(result).toBe(currentStatus);
  });
});
