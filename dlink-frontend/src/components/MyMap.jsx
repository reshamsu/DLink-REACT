import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '400px'
};

const center = {
  lat: 6.9271,
  lng: 79.8612
};

function MyMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // get from Google Cloud Console
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default MyMap;
