import {TCity, TOffer, TOfferPreview} from './types/offers';
import {TMapCity, TMapPoint} from './types/map';
import {RATING_COEFFICIENT} from './const.ts';

export function calculateRatingWidth(rating: number): number {
  return Math.round(rating) * RATING_COEFFICIENT;
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

export function makeFirstLetterToUpperCase (str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
