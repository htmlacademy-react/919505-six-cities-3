import {ChangeEventHandler} from 'react';

export type TReviewFormData = {
  review: string;
  rating: number;
}

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  name: string;
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

export type TInputChangeHandler = ChangeEventHandler<HTMLInputElement>;
export type TFormChangeHandler = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

export type TMapCity = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type TMapPoint = {
  id: string;
  title: string;
  lat: number;
  lng: number;
};

export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
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

export type TReview = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
};

export type TFavoritesObject = {
  [city: string]: TOfferPreview[];
};
