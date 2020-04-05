import React, { useEffect, useContext } from "react";
import MarkerContext from "../contexts/MarkerContext";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "YOUR_API_KEY";

let map;

const initMap = () => {
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [19.81, 52.17],
    zoom: 4.47,
    hash: true,
  });
};

const createMarker = (e) => {
  return new mapboxgl.Marker({ draggable: true })
    .setLngLat([e.lngLat.lng, e.lngLat.lat])
    .addTo(map)
}

const handleClickMap = (setMarkersList) => {
  map.on("click", (e) => {
    const newMarker = createMarker(e);
    newMarker.on('drag', () => updateLngLat(setMarkersList))
    setMarkersList((state) => {
      return [...state, newMarker];
    });
  });
};

const updateLngLat = (setMarkersList) => setMarkersList(state => ([...state]))

const Map = () => {
  const { setMarkersList } = useContext(MarkerContext);

  useEffect(() => {
    initMap();
    handleClickMap(setMarkersList);
  }, [setMarkersList]);

  return <div id="map" style={{ height: '50vh' }}></div>;
};

export default Map;
