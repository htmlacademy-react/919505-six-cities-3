export const RATING_COEFFICIENT = 20;
export const MAX_OFFER_PHOTOS = 6;
export const OFFER_DETAILS_CHECK_NUMBER = 1;
export const MAX_NEARBY_OFFERS = 3;
export const REVIEW_DATE_FORMAT = 'MMMM YYYY';

export const RatingInputTitles = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export enum MapType {
  Main = 'Main',
  Offer = 'Offer'
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer/',
  OfferId = '/offer/:id',
  Favorites = '/favorites',
  PageNotFound = '*',
}

export enum RatingPanelType {
  Reviews = 'Reviews',
  Offer = 'Offer',
  Card = 'Card'
}

export const ReviewLength = {
  MIN: 50,
  MAX: 300
};

export const OfferCardParams = {
  type: {
    default: 'default',
    near: 'near',
    favorite: 'favorite',
  },

  width: {
    little: '150',
    big: '260',
  },

  height: {
    little: '110',
    big: '200',
  }
};

export const BookmarkButtonParams = {
  type: {
    card: 'card',
    view: 'view',
  },

  width: {
    little: '18',
    big: '31',
  },

  height: {
    little: '19',
    big: '33',
  }
};

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];
