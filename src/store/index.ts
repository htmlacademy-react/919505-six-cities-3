import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {NameSpace} from '../common/const';
import {appData} from './app-data/app-data';
import {appProcess} from './app-process/app-process';

const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.App]: appProcess.reducer
});

export const store = configureStore({
  reducer: rootReducer
});
