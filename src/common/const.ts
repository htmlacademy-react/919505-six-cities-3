const Page = {
  MAIN: 'MAIN',
  LOGIN: 'LOGIN',
  OFFER: 'OFFER',
  FAVORITES: 'FAVORITES'
};

const CardTypeParams = {
  DEFAULT: 'DEFAULT',
  NEAR: 'NEAR',
  FAVORITE: 'FAVORITE',

  width: {
    little: '150',
    big: '260',
  },

  height: {
    little: '110',
    big: '200',
  }
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

export {Page, CardTypeParams, RatingPanelType, BookmarkButtonParams, Cities};
