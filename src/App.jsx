import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Filters from './components/Filters/Filters';
import { useState } from 'react';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: 5000,
    yearBuilt: {
      within5: false,
      within10: false,
      within15: false,
      over20: false
    },
    securityScore: {
      excellent: false,
      good: false,
      average: false,
      poor: false,
      veryPoor: false
    },
    location: ''
  });

  return (
    <>
      <Header />
      <div className="app-container">
        <Filters filters={filters} setFilters={setFilters} />
        <Map filters={filters} />
      </div>
    </>
  );
}

export default App;