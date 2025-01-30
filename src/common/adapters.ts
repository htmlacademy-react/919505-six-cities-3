import {TServerOfferPreview} from '../types/server';
import {TOfferPreview} from '../types/offers';


const adaptOfferPreviewToApp = (offer: TServerOfferPreview): TOfferPreview => ({
  id: offer.id,
  title: offer.title,
  type: offer.type,
  price: offer.price,
  city: offer.city,
  location: offer.location,
  isPremium: offer.isPremium,
  isFavorite: offer.isFavorite,
  rating: offer.rating,
  previewImage: offer.previewImage
});

export const adaptOfferPreviewsToApp = (offers: TServerOfferPreview[]): TOfferPreview[] =>
  offers.map((offer) => adaptOfferPreviewToApp(offer));
