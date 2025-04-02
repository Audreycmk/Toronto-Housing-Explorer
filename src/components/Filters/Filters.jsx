import styles from './Filters.module.css';

const Filters = ({ filters, setFilters }) => {
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

  const handleYearBuiltChange = (e) => {
    const { name, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      yearBuilt: {
        ...prev.yearBuilt,
        [name]: checked
      }
    }));
  };

  const handleSecurityScoreChange = (e) => {
    const { name, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      securityScore: {
        ...prev.securityScore,
        [name]: checked
      }
    }));
  };

  const handleLocationChange = (e) => {
    setFilters(prev => ({
      ...prev,
      location: e.target.value
    }));
  };

  return (
    <div className={styles.filtersContainer}>
      <h3 className={styles.filterTitle}>Filter Properties</h3>
      
      <div className={styles.filterGroup}>
        <label>Price Range</label>
        <div className={styles.priceRange}>
          <input
            type="range"
            name="priceMin"
            min="0"
            max="5000"
            step="100"
            value={filters.priceMin}
            onChange={handlePriceChange}
          />
          <input
            type="range"
            name="priceMax"
            min="0"
            max="5000"
            step="100"
            value={filters.priceMax}
            onChange={handlePriceChange}
          />
          <div className={styles.priceValues}>
            <span>${filters.priceMin}</span> - <span>${filters.priceMax}</span>
          </div>
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label>Year Built</label>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="within5"
              checked={filters.yearBuilt.within5}
              onChange={handleYearBuiltChange}
            />
            Within 5 years
          </label>
          <label>
            <input
              type="checkbox"
              name="within10"
              checked={filters.yearBuilt.within10}
              onChange={handleYearBuiltChange}
            />
            5-10 years
          </label>
          <label>
            <input
              type="checkbox"
              name="within15"
              checked={filters.yearBuilt.within15}
              onChange={handleYearBuiltChange}
            />
            10-15 years
          </label>
          <label>
            <input
              type="checkbox"
              name="over20"
              checked={filters.yearBuilt.over20}
              onChange={handleYearBuiltChange}
            />
            More than 20 years
          </label>
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label>Security Score</label>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="excellent"
              checked={filters.securityScore.excellent}
              onChange={handleSecurityScoreChange}
            />
            <span style={{color: '#39b839'}}>1-20 Excellent</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="good"
              checked={filters.securityScore.good}
              onChange={handleSecurityScoreChange}
            />
            <span style={{color: '#a4ce00'}}>20-40 Good</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="average"
              checked={filters.securityScore.average}
              onChange={handleSecurityScoreChange}
            />
            <span style={{color: '#f1b600'}}>40-60 Average</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="poor"
              checked={filters.securityScore.poor}
              onChange={handleSecurityScoreChange}
            />
            <span style={{color: '#e78b00'}}>60-80 Poor</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="veryPoor"
              checked={filters.securityScore.veryPoor}
              onChange={handleSecurityScoreChange}
            />
            <span style={{color: '#ec0000'}}>80-100 Very Poor</span>
          </label>
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label>Location (Address)</label>
        <input
          type="text"
          placeholder="Search by address..."
          value={filters.location}
          onChange={handleLocationChange}
          className={styles.locationInput}
        />
      </div>
    </div>
  );
};

export default Filters;