import {CardType, Cities, SortingType} from '../const';
import {TUser} from './user';

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

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

export type TCityName = (typeof Cities)[number];
export type TOfferSortType = (typeof SortingType)[keyof typeof SortingType];
export type TCardType = (typeof CardType)[keyof typeof CardType];

export type TCity = {
  name: TCityName;
  location: TLocation;
}

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
