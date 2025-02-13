import {createAppAsyncThunk} from '../../../hooks/store/store';
import {TServerFavoriteOffer, TServerOfferPreview} from '../../../types/server-entities';
import {EndPoint, FavoriteStatus} from '../../../const';
import {TOfferPreview} from '../../../types/offers';

interface ChangeProps {
  offerId: string;
  status: FavoriteStatus;
}

interface ChangeResponse {
  offer: TOfferPreview;
  status: FavoriteStatus;
}

export const fetchFavorites = createAppAsyncThunk<TServerOfferPreview[], undefined>
('favorites/fetchAll', async (_arg, {extra: api}) => {
  const response = await api.get<TServerOfferPreview[]>(EndPoint.Favorite);
  return response.data;
});

export const changeFavorite = createAppAsyncThunk<ChangeResponse, ChangeProps>
('favorites/change', async ({offerId, status}, {extra: api}) => {
  const response = await api.post<TServerFavoriteOffer>(`${EndPoint.Favorite}/${offerId}/${status}`);
  return {offer: response.data, status};
});
