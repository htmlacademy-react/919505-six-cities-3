import {adaptCityObjectToMap, adaptOffersToMapPoints} from '../../utils';
import {TCity, TOffer, TOfferPreview} from '../../types/offers';
import {TMapPoint} from '../../types/map';
import {DefaultCity} from '../../const';

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
