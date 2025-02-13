import {TCity} from './types/offers';

export const RATING_COEFFICIENT = 20;
export const MAX_REVIEWS = 10;
export const MAX_OFFER_PHOTOS = 6;
export const MAX_NEARBY_OFFERS = 3;
export const OFFER_DETAILS_CHECK_NUMBER = 1;
export const REVIEW_DATE_FORMAT = 'MMMM YYYY';

export enum ToastMessage {
  InvalidPassword = 'Пароль должен состоять минимум из одной буквы и цифры',
  FavoriteDidNotUpdate = 'Не удалось обновить избранные предложения',
  NoOffers = 'Не удалось получить предложения',
  NoOffer = 'Не удалось получить предложение',
  NoFavoriteOffers = 'Не удалось получить избранные предложения',
  NoNearbyOffers = 'Не удалось получить предложения неподалеку',
  NoReviews = 'Не удалось получить комментарии',
  DidNotPostReview = 'Не удалось отправить комментарий',
  DidNotAuthorize = 'Пользователь не авторизован'
}

export enum EndPoint {
  Offers = '/offers',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

export enum RequestStatus {
  Idle= 'Idle',
  Loading = ' Loading',
  Success = ' Success',
  Failed = 'Failed'
}

export enum FavoriteStatus {
  Added = 1
}

export enum NameSpace {
  App = 'App',
  Offers = 'Offers',
  Reviews = 'Reviews',
  User = 'User'
}

export enum MapType {
  Main = 'Main',
  Offer = 'Offer'
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown'
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer/',
  OfferId = '/offer/:id',
  Favorites = '/favorites',
  NotFound = '/not-found',
  NotExistingPage = '*'
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

export const DefaultCity: TCity = {
  name: 'Paris',
  location: {
    'latitude': 48.85661,
    'longitude': 2.351499,
    'zoom': 13
  }
} as const;

export const SortingType = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
} as const;

export const ReviewLength = {
  Min: 50,
  Max: 300
} as const;

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
} as const;

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
} as const;

export const RatingInputTitles = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;
