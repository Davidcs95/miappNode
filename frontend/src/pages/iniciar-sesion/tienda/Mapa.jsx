import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Mapa.css';
import CambiarVista from './CambiarVista';

// Esto arregla un problema visual común de los iconos en Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, iconSize: [25, 41], iconAnchor: [12, 41] });
L.Marker.prototype.options.icon = DefaultIcon;

const tiendas = [
  { id: 1, localidad: 'Chapinero', coords: [4.6482, -74.0628], nombre: 'Filomena Chapinero' },
  { id: 2, localidad: 'Usaquén', coords: [4.6963, -74.0322], nombre: 'Filomena Usaquén' },
  // Nuevas ubicaciones:
  { id: 3, localidad: 'Kennedy (Tintal)', coords: [4.6395, -74.1565], nombre: 'Filomena Tintal' },
  { id: 4, localidad: 'Bosa', coords: [4.6125, -74.1845], nombre: 'Filomena Bosa' },
  { id: 5, localidad: 'Castilla', coords: [4.6360, -74.1350], nombre: 'Filomena Castilla' },
  { id: 6, localidad: 'Soacha', coords: [4.5800, -74.2150], nombre: 'Filomena Soacha' },
  { id: 7, localidad: 'Fusagasugá (Montearroyo)', coords: [4.3528, -74.3556], nombre: 'Filomena Montearroyo' }
];

const Mapa = () => {
  const [tiendaSeleccionada, setTiendaSeleccionada] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h3 className='tittle1'>Find your Filomena store</h3>
      <select 
      className="selector-localidad"
      onChange={(e) => setTiendaSeleccionada(tiendas.find(t => t.id === parseInt(e.target.value)))}>
        <option value="">Select your neighborhood</option>
        
        {tiendas.map(t => <option key={t.id} value={t.id}>{t.localidad}</option>)}
      </select>

      <div style={{ height: '400px', marginTop: '20px' }}>
        <div className="mapa-view">
        <MapContainer center={[4.6097, -74.0817]} zoom={12} style={{ height: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {tiendaSeleccionada && (
            <CambiarVista coords={tiendaSeleccionada.coords} />
          )}
          {tiendaSeleccionada && (
            <Marker position={tiendaSeleccionada.coords}>
              <Popup>{tiendaSeleccionada.nombre}</Popup>
            </Marker>
          )}
        </MapContainer>
        </div>
        </div>
    </div>
  );
};

export default Mapa;