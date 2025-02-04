import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {NameSpace} from '../common/const';
import {appData} from './slice/app-data';
import {appProcess} from './slice/app-process';
import {createAPI} from '../services/api';
import {userProcess} from './slice/user-process';
import {favoritesSlice} from './slice/favorites/favorites-slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Favorites]: favoritesSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {extraArgument: createAPI()}
    })
});
