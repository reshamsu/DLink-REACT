import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function LeafletMap() {
  const position = [6.9271, 79.8612]; // Colombo

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '600px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Modern Apartment in Dehiwela, Colombo
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LeafletMap;
