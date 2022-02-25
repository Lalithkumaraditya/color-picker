import L, { LatLngExpression } from 'leaflet';
// import { Room } from '@material-ui/icons';
import RoomIcon from '@mui/icons-material/Room';
import icon from '../components/marker.png';
import { data } from './real';
import {
  Circle,
  CircleMarker,
  MapContainer,
  Polyline,
  Polygon,
  Popup,
  Rectangle,
  TileLayer,
  Marker,
} from 'react-leaflet';
import image from '../components/marker.png';
import svgIcon from '../components/marker.svg';

const center: any = [51.505, -0.09];
const greenIcon = L.icon({
  iconUrl: svgIcon,
  // shadowUrl: svgIcon,

  iconSize: [70, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [30, 70], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  // popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor

  // className: 'leaflet-div-icon',
});
const polyline: any = [
  [44.5, -89.5],
  [44.962855, -93.088527],
  [45.003651, -93.166812],
  [44.998796, -93.364579],
  [45.228481, -93.861744],
  [45.481318, -94.235265],
  [47.071168, -97.121558],
  [45.783286, -108.50069],
];

const multiPolyline: any = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
];

const polygon: any = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
];

const multiPolygon: any = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
];

const rectangle: any = [
  [51.49, -0.08],
  [51.5, -0.06],
];

const fillBlueOptions = { fillColor: 'blue' };
const blackOptions = { color: 'black' };
const limeOptions = {
  color: '#325ab8',
  borderRadius: '20px',
  width: '10px',
  height: '4px',
  borderWidth: '10px',
};
const purpleOptions = { color: 'purple' };
const redOptions = { color: 'red' };

export function VectorLayersExample() {
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: '100vw', height: '100vh' }}
      scrollWheelZoom={false}
    >
      {' '}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
      <CircleMarker
        center={[51.51, -0.12]}
        pathOptions={redOptions}
        radius={20}
      >
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      {polyline.map((marker: LatLngExpression, inx: any) => (
        <Marker position={marker} icon={greenIcon}>
          <Popup>{marker}</Popup>
        </Marker>
      ))}
      <Polyline pathOptions={limeOptions} positions={polyline} />
      <Polyline pathOptions={limeOptions} positions={multiPolyline} />
      <Polygon pathOptions={purpleOptions} positions={polygon} />
      <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
      <Rectangle bounds={rectangle} pathOptions={blackOptions} />
    </MapContainer>
  );
}
