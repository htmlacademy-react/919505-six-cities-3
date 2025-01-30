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
