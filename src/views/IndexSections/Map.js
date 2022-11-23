import React from 'react';

import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import swal from 'sweetalert';

const coordonate = [
  { lat: 54, lng: -2, country: 'gb' },
  { lat: 46, lng: 2, country: 'fr' },
  { lat: 60, lng: 100, country: 'ru' },
  { lat: 38, lng: -97, country: 'us' },
  { lat: 40, lng: -4, country: 'es' },
  { lat: 49, lng: 32, country: 'ua' },
  { lat: 60, lng: -95, country: 'ca' },
  { lat: -27, lng: 133, country: 'au' },
  { lat: -10, lng: -55, country: 'br' },
  { lat: 51, lng: 9, country: 'de' },
  { lat: 20, lng: 77, country: 'in' },
  { lat: 42.5, lng: 12.5, country: 'it' },
  { lat: 36, lng: 138, country: 'jp' },
  { lat: 35, lng: 105, country: 'cn' },
];
const key = 'pub_137296461b4d4190969cf4f8630fddbdb8ee7';
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
  const getnews = (val) => {
    let coord = JSON.stringify(val.latLng);
    coord = JSON.parse(coord);
    const index = coordonate.findIndex((x) => x.lat === coord.lat && x.lng === coord.lng);

    const url = `https://newsdata.io/api/1/news?apikey=${key}&country=${coordonate[index].country}&language=en`;
    const req = new Request(url);
    fetch(req)
      .then((response) => response.json())
      .then((responseJSON) => {
        const newRes = responseJSON;
        console.log(newRes);
        swal({
          title: newRes.results[0].title,
          text: `${(newRes?.results[0]?.content || newRes?.results[0]?.description || '').slice(0, 300)} ...`,
          icon: 'info',
          buttons: [true, 'See Full Article'],
        })
          .then((okay) => {
            if (okay) {
              window.location.href = newRes.results[0].link;
            }
          })

          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: 'No News',
          text: 'No News at the moment. Try again later.',
          icon: 'warning',
        });
      });
  };

  return (
    <div id="map-section">
      <MyMapComponent onMarkerClick={getnews} />
    </div>
  );
}
