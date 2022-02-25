import { MapContainer, SVGOverlay, TileLayer } from 'react-leaflet';

const position: any = [51.505, -0.09];
const bounds: any = [
  [51.49, -0.08],
  [51.5, -0.06],
];

export function SVGOverlayExample() {
  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ width: '100vw', height: '100vh' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="blue" />
        <circle r="5" cx="10" cy="10" fill="red" />
        <text x="50%" y="50%" stroke="white">
          text
        </text>
      </SVGOverlay>
    </MapContainer>
  );
}
