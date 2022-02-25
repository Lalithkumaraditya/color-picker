import React from 'react';
import logo from './logo.svg';
import './App.css';

import ColorPicker from './components/ColorPicker';
import CustomColorPicker from './components/CustomColorPicker';
import ChromePickerComponent from './components/ChromePicker';
import AceEditorComponent from './components/AceEditor';
import { VectorLayersExample } from './components/Mleaf_Map';
import { SVGOverlayExample } from './components/SVGOverlay';
import { OtherLayersExample } from './components/OtherLayers';
import { AnimateExample } from './components/ViewBounds';
import { ReactControlExample } from './components/ReactControls';
function App() {
  var wordList = [
    'AAAP_BUSINESS_KEY',
    'AAAP_COUNTRY_CODE',
    'AAAP_COUNTRY_CODE_ICAO',
  ];
  return (
    <div className="App">
      {/* <ColorPicker />
      <CustomColorPicker />
      <ChromePickerComponent /> */}
      <AceEditorComponent />
      <VectorLayersExample />
      {/* <SVGOverlayExample /> */}
      {/* <OtherLayersExample /> */}
      {/* <AnimateExample /> */}
      {/* <ReactControlExample /> */}
    </div>
  );
}

export default App;
// import React from 'react';
// import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { statesData } from './components/data';
// import './App.css';
// import {PopupExample} from './components/'
// const center: any = [40.63463151377654, -97.89969605983609];

// export default function App() {
//   return (
//     <MapContainer
//       center={center}
//       zoom={3}
//       style={{ width: '100vw', height: '100vh' }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {statesData.features.map(state => {
//         const coordinates: any = state.geometry.coordinates[0].map(item => [
//           item[1],
//           item[0],
//         ]);

//         return (
//           <Polygon
//             pathOptions={{
//               fillColor: '#FD8D3C',
//               fillOpacity: 0.7,
//               weight: 2,
//               opacity: 1,
//               dashArray: '3',
//               color: 'white',
//             }}
//             positions={coordinates}
//             eventHandlers={{
//               mouseover: e => {
//                 const layer = e.target;
//                 layer.setStyle({
//                   dashArray: '',
//                   fillColor: '#BD0026',
//                   fillOpacity: 0.7,
//                   weight: 2,
//                   opacity: 1,
//                   color: 'white',
//                 });
//               },
//               mouseout: e => {
//                 const layer = e.target;
//                 layer.setStyle({
//                   fillOpacity: 0.7,
//                   weight: 2,
//                   dashArray: '3',
//                   color: 'white',
//                   fillColor: '#FD8D3C',
//                 });
//               },
//               click: e => {},
//             }}
//           />
//         );
//       })}
//     </MapContainer>
//   );
// }
