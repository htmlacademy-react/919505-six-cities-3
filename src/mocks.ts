import {name, internet, datatype, lorem, address} from 'faker';
import {TOffer, TOfferPreview} from './types/offers';
import {Cities} from './const';
import {TReview} from './types/reviews';
import {TUser} from './types/user';

export const TEST_ID = 'testId';

export const createMockReviewData = () => ({
  offerId: datatype.uuid(),
  body: {
    comment: datatype.string(51),
    rating: datatype.number({ min: 1, max: 5})
  },
});

export const createMockLoginData = () => ({
  email: name.title(),
  password: name.title()
});

export const createMockUser = (): TUser => ({
  name: name.title(),
  avatarUrl: internet.url(),
  isPro: datatype.boolean(),
  email: name.title(),
  token: TEST_ID
} as TUser);

export const createMockReview = (): TReview => ({
  id: TEST_ID,
  date: new Date().toISOString(),
  user: {
    name: name.title(),
    avatarUrl: internet.url(),
    isPro: datatype.boolean(),
  },
  comment: datatype.string(51),
  rating: datatype.number({ min: 1, max: 5}),
} as TReview);

export const createMockReviews = (count: number = 3): TReview[] =>
  Array.from({ length: count }, () => createMockReview());

export const createMockOfferPreview = (isFavorite = false): TOfferPreview => ({
  id: TEST_ID,
  title: lorem.sentence(),
  type: lorem.word(),
  price: datatype.number({ min: 200, max: 5000}),
  city: {
    name: Cities[1],
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: datatype.number({ min: 13, max: 16}),
    },
  },
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: datatype.number({ min: 13, max: 16}),
  },
  isFavorite: isFavorite,
  isPremium: datatype.boolean(),
  previewImage: internet.url(),
} as TOfferPreview);

export const createMockOffer = (isFavorite = false): TOffer => ({
  id: TEST_ID,
  title: lorem.sentence(),
  type: lorem.word(),
  price: datatype.number({ min: 200, max: 5000}),
  city: {
    name: Cities[1],
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: datatype.number({ min: 13, max: 16}),
    },
  },
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: datatype.number({ min: 13, max: 16}),
  },
  isFavorite: isFavorite,
  isPremium: datatype.boolean(),
  rating: datatype.number({ min: 1, max: 5}),
  previewImage: internet.url(),
  description: lorem.paragraph(),
  bedrooms: datatype.number({ min: 1, max: 5}),
  goods: [lorem.word(), lorem.word(), lorem.word()],
  host: {
    name: name.title(),
    avatarUrl: internet.url(),
    isPro: datatype.boolean(),
  },
  images: [internet.url(), internet.url()],
  maxAdults: datatype.number({ min: 1, max: 5})
} as TOffer);

export const createMockOfferPreviews = (count: number = 3): TOfferPreview[] =>
  Array.from({ length: count }, () => createMockOfferPreview());
