import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import {TMapCity, TMapPoint} from '../../types/map';
import {MapType} from '../../common/const';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

type TMapProps = {
  city: TMapCity;
  points: TMapPoint[];
  selectedPointId: string | null | undefined;
  mapType?: MapType;
};

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

export default function Map(props: TMapProps): JSX.Element {
  const {city, points, selectedPointId, mapType} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.lat, city.lng], city.zoom);
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
            selectedPointId && point.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPointId]);

  return <div style={getStyle(mapType)} ref={mapRef}></div>;
}
