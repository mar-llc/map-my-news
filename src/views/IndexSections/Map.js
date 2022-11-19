import React, { useState, useEffect } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb3HOGxF3p9OKAJraSWU7TEmjsP-bBruI&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
));
export default function Map() {
  const [isMarkerShown, setisMarkerShown] = useState(false);

  const delayedShowMarker = () => {
    setTimeout(() => {
      setisMarkerShown(true);
    }, 3000);
  };
  useEffect(() => {
    delayedShowMarker();
  }, []);
  const handleMarkerClick = () => {
    setisMarkerShown(false);
    delayedShowMarker();
  };

  return (
    <div style={{ minWidth: '100vh' }} id="map-section">
      <MyMapComponent isMarkerShown={isMarkerShown} onMarkerClick={handleMarkerClick} />
    </div>
  );
}
