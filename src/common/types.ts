type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type OfferScaffoldingType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: LocationType;
  };
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferPreviewType = OfferScaffoldingType & {
  previewImage: string;
};

export type OfferViewType = OfferScaffoldingType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserType;
  images: string[];
  maxAdults: number;
};

export type ReviewType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
};

export type FavoritesObjectType = {
  [key: string]: OfferPreviewType[];
};
