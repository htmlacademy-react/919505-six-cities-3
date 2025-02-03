export const RATING_COEFFICIENT = 20;
export const MAX_OFFER_PHOTOS = 6;
export const MAX_NEARBY_OFFERS = 3;
export const OFFER_DETAILS_CHECK_NUMBER = 1;
export const REVIEW_DATE_FORMAT = 'MMMM YYYY';

export const RatingInputTitles = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export const CardType = {
  CITIES: 'cities',
  NEAR_PLACES: 'near-places',
  FAVORITES: 'favorites'
} as const;

export const SortingType = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
} as const;

export enum EndPoint {
  Offers = '/offers',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

export enum RequestStatus {
  Idle= 'IDLE',
  Loading = ' LOADING',
  Success = ' SUCCESS',
  Failed = 'FAILED'
}

export enum FavoriteStatus {
  Added = 1,
  Removed = 0
}

export enum NameSpace {
  App = 'APP',
  Data = 'DATA',
  Favorites = 'Favorites',
  User = 'USER'
}

export enum MapType {
  Main = 'Main',
  Offer = 'Offer'
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth'
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

export enum BookmarkButton {
  Card = 'Card',
  View = 'View',
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
  type: BookmarkButton,

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
] as const;
