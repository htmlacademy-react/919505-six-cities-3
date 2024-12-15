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

export type OfferType = OfferScaffoldingType & {
  previewImage: string;
};

export type currentOfferType = OfferScaffoldingType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
};

