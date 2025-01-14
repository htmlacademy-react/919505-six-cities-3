import {useState} from 'react';
import {adaptCityObjectToMap, adaptOffersToMapPoints} from '../utils/common';
import {TMapPoint, TOfferPreview} from '../utils/types';

export default function useMapData(offers: TOfferPreview[]) {
  const cityObjectForMap = adaptCityObjectToMap(offers[0].city);
  const pointsForMap: TMapPoint[] = adaptOffersToMapPoints(offers);

  const [currentActivePoint, setCurrentActivePoint] = useState<TMapPoint | null>(null);

  const handleCardHover = (cardId?: string) => {
    const currentPoint = pointsForMap.find((point) => point.id === cardId);
    setCurrentActivePoint(currentPoint || null);
  };

  return {cityObjectForMap, pointsForMap, currentActivePoint, handleCardHover};
}
