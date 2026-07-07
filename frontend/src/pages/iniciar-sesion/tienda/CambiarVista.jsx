import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

const CambiarVista = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      // flyTo hace la animación suave al punto seleccionado
      map.flyTo(coords, 14, { duration: 1.5 });
    }
  }, [coords, map]);
  return null;
};

export default CambiarVista;