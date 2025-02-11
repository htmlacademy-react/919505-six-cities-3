import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../../types/state';
import {
  ActionCreatorsMapObject,
  AsyncThunk,
  bindActionCreators,
  createAsyncThunk,
  CreateAsyncThunkFunction
} from '@reduxjs/toolkit';
import {useMemo} from 'react';
import {AxiosInstance} from 'axios';

type BoundAsyncThunk<Thunk extends AsyncThunk<unknown, unknown, AsyncThunkConfig>> = (...args: Parameters<Thunk>) => ReturnType<ReturnType<Thunk>>;

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<unknown, unknown, AsyncThunkConfig> ? BoundAsyncThunk<Actions[key]> : Actions[key];
}

const useAppDispatch = () => useDispatch<AppDispatch>();

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


