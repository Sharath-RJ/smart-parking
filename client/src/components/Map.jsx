import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow  } from '@react-google-maps/api';
import { toast } from 'react-toastify';
import API from '../context/API';

const Map = () => {
  const [locations, setLocations] = useState()
  useEffect(()=>{
    async function getLocations(){
      try{
        const res = await API.get("/location")
        const locations_available = res.data.locations.map((location)=>{
          let available = false
          let availablespots = []
          let occupiedspots = []
          for(let i = 0; i < location.devices.length; i++){
            if(!location.devices[i].status){
              available = true
              availablespots.push(location.devices[i])
            }else{
              occupiedspots.push(location.devices[i])
            }
          }
          return {
            ...location,
            available:available,
            availablespots,
            occupiedspots
          }
        })
        console.log(locations_available);
        setLocations(locations_available)
      }catch(error){
        toast.error(error)
      }
    }
    getLocations()
  },[])
  console.log(locations);
  const mapStyles = {
    height: '80vh',
    width: '100%'
  };
  // scms location
  const defaultCenter = {
    lat: 10.269433,
    lng: 76.400251
  };
  const onCloseClick = () => {
    setSelectedMarker(null);
  };
  const [selectedMarker, setSelectedMarker] = useState(null);

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GMAP_API_KEY}
    >
      <GoogleMap
       disableDefaultUI={true}
        mapContainerStyle={mapStyles}
        zoom={70}
        center={defaultCenter}
      >
        {
          locations && locations.map((location)=>{
            console.log(location.location.coordinates[1]);
            return (
              <Marker 
                onClick={() => onMarkerClick({ lat: location.location.coordinates[0], lng: location.location.coordinates[1], location })}
                icon={location.available == true?{
                  url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                }:""}
                position={{ lat: location.location.coordinates[0], lng: location.location.coordinates[1] }}
                zoom={70} 
              />
            )
          })
        }
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker}
            onCloseClick={onCloseClick}
          >
            <div>
              <h2>Location Information</h2>
              <p>Name : {selectedMarker.location.name}</p>
              <p>availablespots : {selectedMarker.location.availablespots.length}</p>
              <p>occupiedspots : {selectedMarker.location.occupiedspots.length}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
