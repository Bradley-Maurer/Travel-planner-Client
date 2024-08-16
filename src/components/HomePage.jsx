import React from 'react';
import '../styles/Home.css';

function HomePage() {
  return (
    <div className="home-container">
      <div className="trip-summary">
        <h3>See recent and upcoming trips planned:</h3>
        <div className="trips">
          <div className="upcoming">
            <h4>Upcoming</h4>
            <div className="trip-details">
              {/* Add trip details here */}
            </div>
          </div>
          <div className="past">
            <h4>Past</h4>
            <div className="trip-details">
              {/* Add trip details here */}
            </div>
          </div>
        </div>
        <a href="/plan">No trips planned? Get started here!</a>
      </div>
    </div>
  );
}

export default HomePage;
