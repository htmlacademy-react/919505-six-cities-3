import {name, internet, datatype, lorem, address} from 'faker';
import {TOffer, TOfferPreview} from './types/offers';
import {Cities} from './const';

export const createMockOfferPreview = (): TOfferPreview => ({
  id: datatype.uuid(),
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
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  previewImage: internet.url(),
} as TOfferPreview);

export const createMockOffer = (): TOffer => ({
  id: datatype.uuid(),
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
  isFavorite: datatype.boolean(),
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

export const createMockOffers = (count: number = 3): TOffer[] =>
  Array.from({ length: count }, () => createMockOffer());
