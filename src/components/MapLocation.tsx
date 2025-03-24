
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const UMaTCoordinates = {
  lng: -2.0014,
  lat: 5.3007,
  zoom: 13
};

const MapLocation = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [UMaTCoordinates.lng, UMaTCoordinates.lat],
      zoom: UMaTCoordinates.zoom
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for UMaT
    new mapboxgl.Marker({ color: "#FF0000" })
      .setLngLat([UMaTCoordinates.lng, UMaTCoordinates.lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML("<h3>University of Mines and Technology</h3><p>Tarkwa, Ghana</p>")
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      setShowTokenInput(false);
    }
  };

  return (
    <div className="w-full h-64 bg-gray-100 rounded-lg relative overflow-hidden">
      {showTokenInput ? (
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-100 z-10">
          <form onSubmit={handleTokenSubmit} className="bg-white p-4 rounded-md shadow-md w-full max-w-md">
            <p className="text-sm text-gray-600 mb-3">
              To display the map, please enter your Mapbox public token:
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                placeholder="pk.eyJ1..."
                className="flex-1 px-3 py-2 border rounded-md text-sm"
              />
              <button 
                type="submit"
                className="px-3 py-2 bg-primary text-white rounded-md text-sm"
              >
                Load Map
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Get your token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mapbox.com</a>
            </p>
          </form>
        </div>
      ) : null}
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default MapLocation;
