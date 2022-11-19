import React, { useState, useEffect } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const coordonate = [
  { lat: 51.5073509, lng: -0.1277583, name: 'London' },
  { lat: 48.5, lng: 2.2, name: 'Paris' },
  { lat: 34.052235, lng: -118.243683, name: 'Los Angeles' },
  { lat: 40.73061, lng: -73.935242, name: 'New York' },
];
const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb3HOGxF3p9OKAJraSWU7TEmjsP-bBruI&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={2} defaultCenter={{ lat: 0, lng: 0 }}>
    {coordonate.map((val, key) => (
      <Marker position={val} onClick={props.onMarkerClick} key={key} />
    ))}
  </GoogleMap>
));
export default function Map() {
  const handleMarkerClick = (val) => {
    alert(`${JSON.stringify(val.latLng)}`);
  };

  return (
    <div style={{ minWidth: '100vh' }} id="map-section">
      <MyMapComponent onMarkerClick={handleMarkerClick} />
    </div>
  );
}
