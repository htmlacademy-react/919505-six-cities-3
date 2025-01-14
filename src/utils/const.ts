const RATING_COEFFICIENT = 20;
const MAX_OFFER_PHOTOS = 6;
const OFFER_DETAILS_CHECK_NUMBER = 1;
const REVIEW_DATE_FORMAT = 'MMMM YYYY';

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

const RatingInputTitles = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer/:id',
  Favorites = '/favorites',
  PageNotFound = '*',
}

enum RatingPanelType {
  Reviews = 'Reviews',
  Offer = 'Offer',
  Card = 'Card'
}

const ReviewLength = {
  MIN: 50,
  MAX: 300
};

const OfferCardParams = {
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

const BookmarkButtonParams = {
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

const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export {RATING_COEFFICIENT, MAX_OFFER_PHOTOS, REVIEW_DATE_FORMAT, OFFER_DETAILS_CHECK_NUMBER, RatingInputTitles, ReviewLength, AuthorizationStatus, AppRoute, OfferCardParams, RatingPanelType, BookmarkButtonParams, Cities};
