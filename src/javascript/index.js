import 'bootstrap';
import '../scss/styles.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

//Map

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1Ijoib2xpdmVyNDYyMSIsImEiOiJja3ZzcXY0NGwyMTlwMnVtb21yazNuZ3h1In0.S3oqaWCKbgXOh5SizUYWWQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:[-71.060982, 42.35725],
zoom: 16
});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());










