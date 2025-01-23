import {useState} from 'react';
import {adaptCityObjectToMap, adaptOffersToMapPoints, adaptOfferToMapPoint} from '../utils/common';
import {TOffer, TOfferPreview} from '../types/offers';
import {TMapPoint} from '../types/map';

export default function useMapData(offers: Array<TOfferPreview | TOffer>, defaultActiveOffer: TOffer | null = null) {
  let initialActivePoint: TMapPoint | null = null;
  const pinsData = [...offers];

  if (defaultActiveOffer) {
    pinsData.push(defaultActiveOffer);
    initialActivePoint = adaptOfferToMapPoint(defaultActiveOffer);
  }

  const cityObjectForMap = adaptCityObjectToMap(pinsData[0].city);
  const pointsForMap: TMapPoint[] = adaptOffersToMapPoints(pinsData);

  const [currentActivePoint, setCurrentActivePoint] = useState<TMapPoint | null>(initialActivePoint);

  const handleCardHover = (cardId?: string) => {
    const currentPoint = pointsForMap.find((point) => point.id === cardId);
    setCurrentActivePoint(currentPoint || null);
  };

  return {cityObjectForMap, pointsForMap, currentActivePoint, handleCardHover};
}
