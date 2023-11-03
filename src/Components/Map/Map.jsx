import React from "react";
import style from "./Map.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC3SrxkU7koOOmhoGxUuSkObqrfhD8dkuI",
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className={style.mapContainer}>
      <GoogleMap
        zoom={17}
        center={{ lat: 25.460101131417506, lng: -100.97272826841423 }}
        mapContainerClassName={style.map}
      >
        <Marker
          position={{ lat: 25.460101131417506, lng: -100.97272826841423 }}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
