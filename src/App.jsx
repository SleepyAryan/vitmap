import "./App.css";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import '@tomtom-international/web-sdk-maps/dist/maps.css';
const MAX_ZOOM = 17;
function App() {
  const mapElement = useRef();
  // VIT Vellore Coordinates
  // 12.968721352224282, 79.15546153121615
  const [mapLongitude, setMapLongitude] = useState(79.15546153121615);
  const [mapLatitude, setMapLatitude] = useState(12.968721352224282);
  const [mapZoom, setMapZoom] = useState(17);
  const [map, setMap] = useState({});
  useEffect(() => {
    let map = tt.map({
      key: "RgVFAqaoAlNLxItPqG6nxsE860G8xPj3",
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      stylesVisibility: { 
        trafficIncidents: true,
        trafficFlow: true,
      },
      zoom: mapZoom
    });
    setMap(map);

    const addMarker = () => {
      const element = document.createElement('div');
      element.className = 'marker'
      const marker = new tt.Marker({
        draggable:true,
        element: element,
      })
      .setLngLat([mapLongitude, mapLatitude])
      .addTo(map)
      marker.on('dragend', () => {
        const lnglat = marker.getLngLat()
        setMapLongitude(lnglat.lng);
        setMapLatitude(lnglat.lat);

      })
    }
    addMarker()
    return () => map.remove();
  }, [mapLongitude, mapLatitude]);
  return (
    <>
    <div className="App">
            <div ref={mapElement} className="map" />
              <div className="search-bar">
              <h1>Text_proto</h1>
            </div>
            <div className="controls">
              <button className="btn" onClick={() => {
                setMapLatitude(12.8406);
                setMapLongitude(80.1534);
              }}>Place_0</button>
              <button className="btn" onClick={() => {
                setMapLatitude(12.8406);
                setMapLongitude(80.1534);
              }}>Place_1</button>
              <button className="btn" onClick={() => {
                setMapLatitude(12.8406);
                setMapLongitude(80.1534);
              }}>Place_3</button>
              <button className="btn" onClick={() => {
                setMapLatitude(12.8406);
                setMapLongitude(80.1534);
              }}>Place_4</button>
              <button className="btn" onClick={() => {
                setMapLatitude(12.8406);
                setMapLongitude(80.1534);
              }}>Place_5</button>
            </div>
    </div>
    </>
  );
}
export default App;

