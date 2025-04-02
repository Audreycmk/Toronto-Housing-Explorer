import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import { APIProvider, Map, Marker, InfoWindow } from '@vis.gl/react-google-maps';
import styles from './Map.module.css';

const App = () => {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const location = { lat: -25.363, lng: 131.044 };
  const condo = 'The Hudson';
  const address = '438 King St W, Toronto, ON M5V 3T9';
  const developer = 'Great Gulf';
  const yearBuilt = 2008;
  const rent = '$2500 (1b1b)';
  const securityScore = 24;

  return (
    <div className={styles.mapContainer}>
      <APIProvider 
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} 
        onLoad={() => console.log('Google Maps API loaded')}
      >
        <Map
          defaultZoom={4}
          defaultCenter={location}
          onCameraChanged={(ev) => {
            console.log('Camera changed:', ev.detail.center, 'Zoom:', ev.detail.zoom);
          }}
          style={{ width: '100%', height: '95%' }}
        >
          <Marker
            position={location}
            title={"Uluru (Ayers Rock)"}
            onClick={() => setIsInfoWindowOpen(true)}
          />
          
          {isInfoWindowOpen && (
            <InfoWindow
              position={location}
              onCloseClick={() => setIsInfoWindowOpen(false)}
            >
              <div>
                <h1>{condo}</h1>
                <p>
                  <b>Address:</b> {address} <br />
                  <b>Developer:</b> {developer} <br />
                  <b>Year Built:</b> {yearBuilt} <br />
                  <b>Average Rent:</b> <h3>{rent}</h3> <br />
                  <b>Security Score:</b> <h3>{securityScore}</h3> <br />
                </p>
              </div>
            </InfoWindow>
          )}
        </Map>
      </APIProvider>
    </div>
  );
};

// Only create root if we're rendering this directly
if (typeof document !== 'undefined') {
  const container = document.getElementById('app');
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
}

export default App;