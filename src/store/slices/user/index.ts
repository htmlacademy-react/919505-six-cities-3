import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace, RequestStatus} from '../../../common/const';
import {TUserState} from '../../../types/state';
import {TUser} from '../../../types/user';
import {checkAuth, login, logout} from '../../thunks/user';

const initialState: TUserState = {
  info: null,
  authorizationStatus: AuthorizationStatus.NoAuth,
  requestStatus: RequestStatus.Idle
};

function processLoading(state: TUserState) {
  state.requestStatus = RequestStatus.Loading;
}

function processSuccess(state: TUserState, action: PayloadAction<TUser>) {
  state.info = action.payload;
  state.authorizationStatus = AuthorizationStatus.Auth;
  state.requestStatus = RequestStatus.Success;
}

function processFail(state: TUserState) {
  state.authorizationStatus = AuthorizationStatus.NoAuth;
  state.requestStatus = RequestStatus.Failed;
}

function processLogout(state: TUserState) {
  state.info = null;
  state.authorizationStatus = AuthorizationStatus.NoAuth;
  state.requestStatus = RequestStatus.Idle;
}

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(checkAuth.pending, processLoading);
    builder.addCase(checkAuth.fulfilled, processSuccess);
    builder.addCase(checkAuth.rejected, processFail);

    builder.addCase(login.pending, processLoading);
    builder.addCase(login.fulfilled, processSuccess);
    builder.addCase(login.rejected, processFail);

    builder.addCase(logout.fulfilled, processLogout);
  },

  selectors: {
    info: (state: TUserState): TUser | null => state.info,
    authorizationStatus: (state: TUserState): AuthorizationStatus => state.authorizationStatus,
  }
});

const userSliceActions = {
  ...userSlice.actions,
  checkAuth,
  login,
  logout
};

const userSliceSelectors = userSlice.selectors;

export {userSlice, userSliceActions, userSliceSelectors};
