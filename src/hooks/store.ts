import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../types/state';
import {
  ActionCreatorsMapObject,
  AsyncThunk,
  bindActionCreators,
  createAsyncThunk,
  CreateAsyncThunkFunction
} from '@reduxjs/toolkit';
import {useMemo} from 'react';
import {AxiosInstance} from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (...args: Parameters<Thunk>) => ReturnType<ReturnType<Thunk>>;

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any> ? BoundAsyncThunk<Actions[key]> : Actions[key];
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};

type AsyncThunkConfig = {
  extra: AxiosInstance;
  rejectValue: string;
}

export const createAppAsyncThunk: CreateAsyncThunkFunction<AsyncThunkConfig> = createAsyncThunk.withTypes<AsyncThunkConfig>();


