import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../common/const';
import {appData} from './app-data/app-data';
import {appProcess} from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.App]: appProcess.reducer
});
