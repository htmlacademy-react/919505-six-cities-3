import {EndPoint} from '../../../const';
import {createAppAsyncThunk} from '../../../hooks/store/store';
import {TUser} from '../../../types/user';
import {deleteToken, saveToken} from '../../../services/token';

interface LoginData {
  email: string;
  password: string;
}

export const checkAuth = createAppAsyncThunk<TUser, undefined>
('user/checkAuth', async (_arg, {extra: api}) => {
  const response = await api.get<TUser>(EndPoint.Login);
  return response.data;
});

export const login = createAppAsyncThunk<TUser, LoginData>
('user/login', async (body, {extra: api}) => {
  const response = await api.post<TUser>(EndPoint.Login, body);
  if (response.data.token) {
    saveToken(response.data.token);
  }
  return response.data;
});

export const logout = createAppAsyncThunk<unknown, undefined>
('user/logout', async (_, {extra: api}) => {
  await api.delete(EndPoint.Logout);
  deleteToken();
});
