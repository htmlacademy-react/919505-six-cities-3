import {TServerFavoriteOffer, TServerOffer, TServerOfferPreview, TServerReview} from '../types/server';
import {TOffer, TOfferPreview} from '../types/offers';
import {TReview} from '../types/reviews';

const adaptReviewToApp = (review: TServerReview): TReview => ({
  id: review.id,
  date: review.date,
  user: review.user,
  comment: review.comment,
  rating: review.rating,
});

export const adaptOfferPreviewToApp = (offer: TServerOfferPreview | TServerFavoriteOffer): TOfferPreview => ({
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


export const adaptOfferToApp = (offer: TServerOffer): TOffer => ({
  id: offer.id,
  title: offer.title,
  type: offer.type,
  price: offer.price,
  city: offer.city,
  location: offer.location,
  isFavorite: offer.isFavorite,
  isPremium: offer.isPremium,
  rating: offer.rating,

  description: offer.description,
  bedrooms: offer.bedrooms,
  goods: offer.goods,
  host: offer.host,
  images: offer.images,
  maxAdults: offer.maxAdults
});

export const adaptOfferPreviewsToApp = (offers: TServerOfferPreview[]): TOfferPreview[] =>
  offers.map((offer) => adaptOfferPreviewToApp(offer));

export const adaptReviewsToApp = (reviews: TServerReview[]): TReview[] =>
  reviews.map((review) => adaptReviewToApp(review));
