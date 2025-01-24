import {TCity, TCityName, TFavoritesObject, TOffer, TOfferPreview, TOfferSortType} from '../types/offers';
import {TMapCity, TMapPoint} from '../types/map';
import {AuthorizationStatus, RATING_COEFFICIENT, SortingTypes} from './const.ts';

export function calculateRatingWidth(rating: number): number {
  return Math.round(rating) * RATING_COEFFICIENT;
}

export function generateFavoriteOffersObject(offers: TOfferPreview[]): TFavoritesObject {
  const result: TFavoritesObject = {};

  offers.forEach((offer) => {
    if (result[offer.city.name]) {
      result[offer.city.name].push(offer);
    } else {
      result[offer.city.name] = [offer];
    }
  });

  return result;
}

export function getAuthorizationStatus() {
  return AuthorizationStatus.Auth;
}

export function filterOffersByCity(offers: TOfferPreview[], city: string) {
  return offers.filter((offerPreview) => offerPreview.city.name === city);
}

export function adaptCityObjectToMap(city: TCity): TMapCity {
  return {
    title: city.name,
    lat: city.location.latitude,
    lng: city.location.longitude,
    zoom: city.location.zoom
  };
}

export function adaptOfferToMapPoint(offer: TOfferPreview | TOffer): TMapPoint {
  return {
    id: offer.id,
    title: offer.title,
    lat: offer.location.latitude,
    lng: offer.location.longitude
  };
}

export function adaptOffersToMapPoints(offers: Array<TOfferPreview | TOffer>): TMapPoint[] {
  return offers.map((offer) => adaptOfferToMapPoint(offer));
}

export function getProcessedOffers(offers: TOfferPreview[], city: TCityName, sortType: TOfferSortType) {
  const currentCityOffers = offers
    .filter((offer) => offer.city.name === city);

  switch (sortType) {
    case SortingTypes.POPULAR:
      return currentCityOffers;
    case SortingTypes.HIGH_TO_LOW:
      return currentCityOffers.sort((a, b) => b.price - a.price);
    case SortingTypes.LOW_TO_HIGH:
      return currentCityOffers.sort((a, b) => a.price - b.price);
    case SortingTypes.TOP_RATED_FIRST:
      return currentCityOffers.sort((a, b) => b.rating - a.rating);
    default:
      return currentCityOffers;
  }
}
