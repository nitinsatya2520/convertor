import React, { useState } from 'react';
import axios from 'axios';
import logo from './weel.svg';
import './App.css';

const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState(null);
  
    const calculateAge = (date) => {
      const today = new Date();
      const birthDate = new Date(date);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (birthDate) {
        const calculatedAge = calculateAge(birthDate);
        setAge(calculatedAge);
      } else {
        setAge(null);
      }
    };
  
    return (
      <div>
        <h2>Age Calculator</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Birth Date:
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </label>
          <button type="submit">Calculate Age</button>
        </form>
        {age !== null && (
          <div>
            <h3>Your Age:</h3>
            <p>{age} years old</p>
          </div>
        )}
      
  
  
            <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    
  </header>
        </div>
    );
};

export default AgeCalculator;
