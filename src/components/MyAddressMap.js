import React from 'react';
import './MyAddressMap.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MyAddressMap = () => {
  return (
    <>
        <div className="info-map">
          Villa Azalea, Cotcot 
          <br />
          Liloan, Cebu 
          <br />
          Philippines, 6002 <br />
          <br />
          <span>jerichalombro@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
    </>
  )
}

export default MyAddressMap;
