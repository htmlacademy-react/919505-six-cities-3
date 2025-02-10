import {memo, useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import {MapType} from '../../const';
import useMap from '../../hooks/use-map';
import {TOfferPreview} from '../../types/offers';
import getMapData from './utils';
import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks/store';
import {appSliceSelectors} from '../../store/slices/app';

type TMapProps = {
  offers: TOfferPreview[];
  mapType: MapType;
  defaultActiveId?: string;
}

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';
const ICON_ANCHOR = 14;
const ICON_WIDTH = 28;
const ICON_HEIGHT = 40;


const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_ANCHOR, ICON_HEIGHT]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_ANCHOR, ICON_HEIGHT]
});

function getStyle(mapType?: MapType) {
  switch (mapType) {
    case MapType.Main:
      return {height: '100%'};
    case MapType.Offer:
      return {width: '1144px', height: '100%', margin: 'auto'};
    default:
      return {height: '100%'};
  }
}

function Map({offers, mapType, defaultActiveId}: TMapProps): JSX.Element {
  const activeOfferId = useAppSelector(appSliceSelectors.activeOfferId);
  const activeId = defaultActiveId ? defaultActiveId : activeOfferId;

  const hoveredCardObject = offers.find((offer) => offer.id === activeId);
  const [city, points] = getMapData(offers, hoveredCardObject);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.lat, city.lng]);
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            activeId && point.id === activeId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, activeId]);

  return (
    <section className={`${mapType === MapType.Main ? 'cities' : 'offer'}__map map`}>
      <div style={getStyle(mapType)} ref={mapRef}></div>
    </section>);
}

const MemorizedMap = memo(Map);
export default MemorizedMap;
