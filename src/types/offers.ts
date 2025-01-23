import {Cities, SortingTypes} from '../common/const';
import {TUser} from './user';

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCityName = (typeof Cities)[number];

export type TOfferSortType = (typeof SortingTypes)[keyof typeof SortingTypes];

export type TCity = {
  name: TCityName;
  location: TLocation;
}

type TOfferScaffolding = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type TOfferPreview = TOfferScaffolding & {
  previewImage: string;
};

export type TOffer = TOfferScaffolding & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;
};

export type TFavoritesObject = {
  [city: string]: TOfferPreview[];
};
