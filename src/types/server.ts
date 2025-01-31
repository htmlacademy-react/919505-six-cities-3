import {TCityName} from './offers';

export type TServerOfferPreview = {
  'id': string;
  'title': string;
  'type': string;
  'price': number;
  'city': {
    'name': TCityName;
    'location': {
      'latitude': number;
      'longitude': number;
      'zoom': number;
    };
  };
  'location': {
    'latitude': number;
    'longitude': number;
    'zoom': number;
  };
  'isFavorite': boolean;
  'isPremium': boolean;
  'rating': number;
  'previewImage': string;
}

export type TServerOffer = {
  'id': string;
  'title': string;
  'type': string;
  'price': number;
  'city': {
    'name': TCityName;
    'location': {
      'latitude': number;
      'longitude': number;
      'zoom': number;
    };
  };
  'location': {
    'latitude': number;
    'longitude': number;
    'zoom': number;
  };
  'isFavorite': boolean;
  'isPremium': boolean;
  'rating': number;
  'description': string;
  'bedrooms': number;
  'goods': string[];
  'host': {
    'name': string;
    'avatarUrl': string;
    'isPro': boolean;
  };
  'images': string[];
  'maxAdults': number;
}

export type TServerReview = {
  'id': string;
  'date': string;
  'user': {
    'name': string;
    'avatarUrl': string;
    'isPro': boolean;
  };
  'comment': string;
  'rating': number;
}
