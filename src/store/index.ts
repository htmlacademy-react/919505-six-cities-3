import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offersSlice} from './slices/offers';
import {appSlice} from './slices/app';
import {createAPI} from '../services/api';
import {userSlice} from './slices/user';
import {reviewsSlice} from './slices/reviews';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {extraArgument: createAPI()}
    })
});
