import React from 'react';
import './MyAddressMap.scss';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MyAddressMap = () => {
  return (
    <div data-testid="addressMap">
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
          <MapContainer center={[10.4314048, 123.9977323]} zoom={13} scrollWheelZoom={false} zoomControl={false} data-testid="map">
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[10.4314048, 123.9977323]}>
              <Popup>Jerich lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>
  )
}

export default MyAddressMap;
