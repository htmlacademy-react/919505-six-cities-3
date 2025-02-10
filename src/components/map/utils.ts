import {adaptCityObjectToMap, adaptOffersToMapPoints, adaptOfferToMapPoint} from '../../utils';
import {TOffer, TOfferPreview} from '../../types/offers';
import {TMapPoint} from '../../types/map';
import {DefaultCity} from '../../const';

export default function getMapData(offers: Array<TOfferPreview | TOffer>, hoveredCardObject: TOfferPreview | TOffer | undefined) {
  let activeMapPoint = null;
  let city = DefaultCity;

  if (offers[0]) {
    city = offers[0].city;
  }

  const cityObjectForMap = adaptCityObjectToMap(city);
  const pointsForMap: TMapPoint[] = adaptOffersToMapPoints(offers);

  if (hoveredCardObject) {
    activeMapPoint = adaptOfferToMapPoint(hoveredCardObject);
    pointsForMap.push(activeMapPoint);
  }

  return [cityObjectForMap, pointsForMap] as const;
}
