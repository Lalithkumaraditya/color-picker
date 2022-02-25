import {
  Circle,
  FeatureGroup,
  LayerGroup,
  MapContainer,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet';

const center: any = [51.505, -0.09];
const rectangle: any = [
  [51.49, -0.08],
  [51.5, -0.06],
];

const fillBlueOptions = { fillColor: 'blue' };
const fillRedOptions = { fillColor: 'red' };
const greenOptions = { color: 'green', fillColor: 'green' };
const purpleOptions = { color: 'purple' };

export function OtherLayersExample() {
  return (
    <MapContainer
      center={center}
      zoom={3}
      style={{ width: '100vw', height: '100vh' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
        <Circle
          center={[12.9665, 77.6072]}
          pathOptions={fillRedOptions}
          radius={100}
          stroke={false}
        />
        <LayerGroup>
          <Circle
            center={[31.0, -100.0]}
            pathOptions={greenOptions}
            radius={100}
          />
        </LayerGroup>
      </LayerGroup>
      <FeatureGroup pathOptions={purpleOptions}>
        <Popup>Popup in FeatureGroup</Popup>
        <Circle center={[12.9665, 77.6072]} radius={200} />
        <Rectangle bounds={rectangle} />
      </FeatureGroup>
    </MapContainer>
  );
}
