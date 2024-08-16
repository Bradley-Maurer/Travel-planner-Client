import React, { useState } from 'react';
import '../styles/PlanTrip.css';

function TripPlanPage() {
  const [days, setDays] = useState([{ day: 1, plan: '' }]);

  const handleAddDay = () => {
    setDays([...days, { day: days.length + 1, plan: '' }]);
  };

  const handlePlanChange = (index, event) => {
    const newDays = [...days];
    newDays[index].plan = event.target.value;
    setDays(newDays);
  };

  const handleRemoveDay = (index) => {
    const newDays = days.filter((_, i) => i !== index);
    setDays(newDays);
  };

  return (
    <div className="trip-plan-container">
      <div className="itinerary-box">
        <h3>Travel Itinerary</h3>
        <form>
          <label htmlFor="flight">Flight number:</label>
          <input type="text" id="flight" name="flight" />
          <label htmlFor="hotel">Hotel Address:</label>
          <input type="text" id="hotel" name="hotel" />
          <label htmlFor="arrival">Arrival:</label>
          <input type="date" id="arrival" name="arrival" />
          <label htmlFor="departure">Departure:</label>
          <input type="date" id="departure" name="departure" />

          {days.map((day, index) => (
            <div key={index} className="day-plan">
              <h4>Day {day.day}:</h4>
              <textarea
                value={day.plan}
                onChange={(event) => handlePlanChange(index, event)}
                placeholder={`Day ${day.day} plans here`}
              ></textarea>
              <button
                type="button"
                className="remove-day"
                onClick={() => handleRemoveDay(index)}
              >
                Remove Day
              </button>
            </div>
          ))}

          <button type="button" className="add-day" onClick={handleAddDay}>
            Add Another Day
          </button>
        </form>
      </div>
    </div>
  );
}

export default TripPlanPage;

