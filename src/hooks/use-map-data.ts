import {useState} from 'react';
import {adaptCityObjectToMap, adaptOffersToMapPoints, adaptOfferToMapPoint} from '../utils/common';
import {TMapPoint, TOffer, TOfferPreview} from '../utils/types';

export default function useMapData(offers: Array<TOfferPreview | TOffer>, defaultActiveOffer: TOffer | null = null) {
  let initialActivePoint: TMapPoint | null = null;

  if (defaultActiveOffer) {
    //offers = [...offers, defaultActiveOffer];
    offers.push(defaultActiveOffer);
    initialActivePoint = adaptOfferToMapPoint(defaultActiveOffer);
  }

  const cityObjectForMap = adaptCityObjectToMap(offers[0].city);
  const pointsForMap: TMapPoint[] = adaptOffersToMapPoints(offers);

  const [currentActivePoint, setCurrentActivePoint] = useState<TMapPoint | null>(initialActivePoint);

  const handleCardHover = (cardId?: string) => {
    const currentPoint = pointsForMap.find((point) => point.id === cardId);
    setCurrentActivePoint(currentPoint || null);
  };

  return {cityObjectForMap, pointsForMap, currentActivePoint, handleCardHover};
}
