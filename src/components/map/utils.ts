import {TCity, TOffer, TOfferPreview} from '../../types/offers';
import {TMapCity, TMapPoint} from '../../types/map';
import {DefaultCity} from '../../const';

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

function adaptOffersToMapPoints(offers: Array<TOfferPreview | TOffer>): TMapPoint[] {
  return offers.map((offer) => adaptOfferToMapPoint(offer));
}

export default function getMapData(offers: Array<TOfferPreview | TOffer>, defaultActiveId: string | null = null) {
  let city: TCity | undefined = DefaultCity;

  if (defaultActiveId) {
    city = offers.find((offer) => offer.id === defaultActiveId)?.city;
  } else if (offers[0]) {
    city = offers[0].city;
  }

  const cityObjectForMap = adaptCityObjectToMap(city as TCity);
  const pointsForMap: TMapPoint[] = adaptOffersToMapPoints(offers);

  return [cityObjectForMap, pointsForMap] as const;
}
