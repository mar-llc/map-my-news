import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import swal from 'sweetalert';

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
  const getnews = (val) => {
    let coord = JSON.stringify(val.latLng);
    coord = JSON.parse(coord);
    const index = coordonate.findIndex((x) => x.lat === coord.lat && x.lng === coord.lng);

    const url =
      `https://newsapi.org/v2/top-headlines?` +
      `q=${coordonate[index].name}&` +
      `sortBy=popularity&` +
      `apiKey=7b5f48dbc9e348db8616f70b532aff14`;
    const req = new Request(url);
    fetch(req)
      .then((response) => response.json())
      .then((responseJSON) => {
        const newRes = responseJSON;
        console.log(newRes);
        swal({
          title: newRes.articles[0].title,
          text: newRes.articles[0].content,
          icon: 'info',
          buttons: [true, 'See Full Article'],
        }).then((okay) => {
          if (okay && newRes.articles.lenght) {
            window.location.href = newRes.articles[0].url;
          }
        });
      })
      .catch(
        swal({
          title: 'Error',
          text: 'No News at the moment. Try again later.',
          icon: 'warning',
        })
      );
  };

  return (
    <div id="map-section">
      <MyMapComponent onMarkerClick={getnews} />
    </div>
  );
}
