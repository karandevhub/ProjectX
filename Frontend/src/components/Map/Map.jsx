import React, { useRef, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import "./Style.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import osm from "../Map/osm-provider";

const Map = ({ cameras }) => {
  const [center, setCenter] = useState([23.6693, 86.1511]);
  const DEFAULT_ZOOM = 11;
  const mapRef = useRef();

  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Home Screen</h1>
      <Link to="/CameraList" className="button">
        Camera devices
      </Link>
      <div className="map-container">
        <MapContainer
          center={center}
          zoom={DEFAULT_ZOOM}
          style={{ width: "100%", height: "100%" }}
          ref={mapRef}
        >
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attributions}
          />
          {cameras.map((marker, index) => (
            <Marker key={index} position={marker.geocode}>
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <Link to="/" className="logout-link">
        Logout
      </Link>
    </div>
  );
};

export default Map;
