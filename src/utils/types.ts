import {ChangeEventHandler} from 'react';

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
  city: {
    name: string;
    location: TLocation;
  };
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type TInputChangeHandler = ChangeEventHandler<HTMLInputElement>;
export type TReviewChangeHandler = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

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
