import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import {TMapCity, TMapPoint} from '../../utils/types';
import {MapType} from '../../utils/const';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

type TMapProps = {
  city: TMapCity;
  points: TMapPoint[];
  selectedPoint: TMapPoint | null;
  mapType?: MapType;
};

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';
const ICON_WIDTH = 27;
const ICON_HEIGHT = 39;


const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH, ICON_HEIGHT]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH, ICON_HEIGHT]
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

export default function Map(props: TMapProps): JSX.Element {
  const {city, points, selectedPoint, mapType} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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
            selectedPoint && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <div style={getStyle(mapType)} ref={mapRef}></div>;
}
