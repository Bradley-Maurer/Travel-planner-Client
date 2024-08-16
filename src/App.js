import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import TripPlanPage from './components/PlanTripPage';
import BudgetPage from './components/TrackBudgetPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const loggedIn = sessionStorage.getItem('isAuthenticated');
    if (loggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', 'true');
  };

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/" />} />
          <Route path="/plan" element={isAuthenticated ? <TripPlanPage /> : <Navigate to="/" />} />
          <Route path="/budget" element={isAuthenticated ? <BudgetPage /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
