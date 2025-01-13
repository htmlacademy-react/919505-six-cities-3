export type AppProps = {
  currentCity: string;
  offerPreviews: OfferPreview[] | [];
  offer: Offer;
  reviews: Review[] | [];
  favoritesObject: FavoritesObject;
  favoritesQuantity: number;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type OfferScaffolding = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferPreview = OfferScaffolding & {
  previewImage: string;
};

export type Offer = OfferScaffolding & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type FavoritesObject = {
  [city: string]: OfferPreview[];
};
