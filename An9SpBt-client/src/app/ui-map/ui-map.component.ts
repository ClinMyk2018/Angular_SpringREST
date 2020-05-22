import { Component, OnInit, Query } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


@Component({
  selector: 'app-ui-map',
  templateUrl: './ui-map.component.html',
  styleUrls: ['./ui-map.component.css'],
})

export class UiMapComponent implements OnInit {

  constructor() { }


// CREATE MAP AND MARKER ON LOAD
ngOnInit() {
  this.geoCode();
  this.initMarker();
  this.initMap();

}


// MAKE MAP FUNCTION TO LOAD MAP AND DO EVERYTHING ELSE
initMap() {
(mapboxgl as any).accessToken = environment.mapbox.accessToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.491142, 29.424349],
    zoom: 8
  });

  // Puts geocoder input in top-left
map.addControl(this.geoCode(), 'top-left');

  // Puts the zoom and compass on right
map.addControl(new mapboxgl.NavigationControl());

  // Puts onClick function to get lat/long
map.on('dblclick', function(e) {
  console.log('A click event has occurred at: ' + e.lngLat);
});
map.doubleClickZoom.disable();
return map;
}

// MAKE MARKER FUNCTION SO IF MARKER IS MOVED YOU GET THE DATA
initMarker() {

  const marker = new mapboxgl.Marker({
    draggable: true
  })
  .setLngLat([-98.491142, 29.424349])
  .addTo(this.initMap());

  function onDragEnd() {
const lngLat = marker.getLngLat();
console.log('This is from initMarker: ' + lngLat);

}
  marker.on('dragend', onDragEnd);
}

//  MAKE THE GEOCODER FOR TEXT INPUT SEARCH BOX ON MAP
geoCode() {
  const geocoder = new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
localGeocoder: this.coordinatesGeocoder,
center: Query,
zoom: 6,
mapboxgl
});

  geocoder.on('result', function(res) {
    // This will return the object
    const geoCodeResult = res.result;
    console.log(geoCodeResult);

  // These return the string versions of the geocoder result LAT/LONG
      // lat = geoCodeResult.geometry.coordinates[1].toString();
      // long = geoCodeResult.geometry.coordinates[0].toString();
  });
  
  return geocoder;
}

// ALLOW COORDINATES TO BE PUT IN AS WELL
coordinatesGeocoder = function(query: { match: (arg0: RegExp) => boolean; }) {
const matches = query.match(
/^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
);
if (!matches) {
return null;
}

function coordinateFeature(lng: string | number, lat: string | number) {
return {
center: [lng, lat],
geometry: {
type: 'Point',
coordinates: [lng, lat]
},
place_name: 'Lat: ' + lat + ' Lng: ' + lng,
place_type: ['coordinate'],
properties: {},
type: 'Feature'
};
}

const coord1 = Number(matches[1]);
const coord2 = Number(matches[2]);
const geocodes = [];

// must be lng, lat
if (coord1 < -90 || coord1 > 90) {
geocodes.push(coordinateFeature(coord1, coord2));
}

// must be lat, lng
if (coord2 < -90 || coord2 > 90) {
geocodes.push(coordinateFeature(coord2, coord1));
}

// else could be either lng, lat or lat, lng
if (geocodes.length === 0) {
geocodes.push(coordinateFeature(coord1, coord2));
geocodes.push(coordinateFeature(coord2, coord1));
}
return geocodes;
};


}
