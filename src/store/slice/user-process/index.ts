import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../../common/const';
import {TUserState} from '../../../types/state';

const initialState: TUserState = {
  AuthorizationStatus: AuthorizationStatus.NoAuth
};

const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {

  },

  selectors: {

  }
});

const userProcessActions = userProcess.actions;
const userProcessSelectors = userProcess.selectors;

export {userProcess, userProcessActions, userProcessSelectors};
