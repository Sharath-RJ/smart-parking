import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '80vh',
    width: '100%'
  };
  // scms location
  const defaultCenter = {
    lat: 10.269433,
    lng: 76.400251
  };
  return (
    <LoadScript
      // googleMapsApiKey={process.env.REACT_APP_GMAP_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={70}
        center={defaultCenter}
      />
    </LoadScript>
  )
}

export default Map
