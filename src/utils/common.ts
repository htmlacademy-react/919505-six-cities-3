import {TCity, TFavoritesObject, TMapCity, TMapPoint, TOffer, TOfferPreview} from './types.ts';
import {AuthorizationStatus, Cities, RATING_COEFFICIENT} from './const.ts';
import {offerPreviews} from '../mocks/offer-previews';

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

export function getScreenData() {
  const currentCityName = Cities[3];
  const offers = filterOffersByCity(offerPreviews, currentCityName);

  return [currentCityName, offers] as const;
}
