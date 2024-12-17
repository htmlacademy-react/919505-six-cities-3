const Page = {
  MAIN: 'MAIN',
  LOGIN: 'LOGIN',
  OFFER: 'OFFER',
  FAVORITES: 'FAVORITES'
};

const CardType = {
  DEFAULT: 'DEFAULT',
  NEAR: 'NEAR',
  FAVORITE: 'FAVORITE'
};

const RatingPanelType = {
  REVIEWS: 'REVIEWS',
  OFFER: 'OFFER',
  CARD: 'CARD'
};

const BookmarkButtonParams = {
  CARD: 'CARD',
  VIEW: 'VIEW',

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

export {Page, CardType, RatingPanelType, BookmarkButtonParams, Cities};
