import {adaptCityObjectToMap, adaptOffersToMapPoints, adaptOfferToMapPoint} from '../common/utils';
import {TOffer, TOfferPreview} from '../types/offers';
import {TMapPoint} from '../types/map';

export default function useMapData(offers: Array<TOfferPreview | TOffer>, hoveredCardObject: TOfferPreview | TOffer | undefined) {
  let activeMapPoint = null;

  const cityObjectForMap = adaptCityObjectToMap(offers[0].city);
  const pointsForMap: TMapPoint[] = adaptOffersToMapPoints(offers);

  if (hoveredCardObject) {
    activeMapPoint = adaptOfferToMapPoint(hoveredCardObject);
    pointsForMap.push(activeMapPoint);
  }

  return {cityObjectForMap, pointsForMap};
}
