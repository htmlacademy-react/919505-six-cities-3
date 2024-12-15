type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: {
    name: string;
    location: LocationType;
  };

  location: LocationType;

  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};
