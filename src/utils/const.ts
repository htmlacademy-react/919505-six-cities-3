const RATING_COEFFICIENT = 20;

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

export {RATING_COEFFICIENT, RatingInputTitles, AuthorizationStatus, AppRoute, OfferCardParams, RatingPanelType, BookmarkButtonParams, Cities};
