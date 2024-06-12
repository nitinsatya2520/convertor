import React, { useContext } from 'react';
import logo from './weel.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ByteConverter from './ByteConverter';
import TemperatureConverter from './TemperatureConverter';
import AgeCalculator from './AgeCalculator';
import Home from './Home';
import Feedback from './Feedback'; // Import Feedback component
import Contact from './Contact'; // Import Contact component
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
import { AuthContext } from './AuthContext';
import AreaConverter from './AreaConverter';
import SpeedConverter from './SpeedConverter';
import WeightConverter from './WeightConverter';
import TimeConverter from './TimeConverter';
import PowerConverter from './PowerConverter';
import VolumeConverter from './VolumeConverter';



function App() {
  const { user } = useContext(AuthContext);

    return (

      
        <Router>
          
          


  

          <div className='Appl-header'>
          <nav>
            <ul>

              
             <li><Link to="/">Home</Link></li>
                    {user ? (
                        <>
                            <li><Link to="/byte-converter">Byte Converter</Link></li>
       <li><Link to="/temp-converter">Temperature Converter</Link></li>
       <li><Link to="/age-calculator">Age Calculator</Link></li>
       <li><Link to="/area-converter">Area Converter</Link></li>
       <li><Link to="/speed-converter">Speed Converter</Link></li>
       <li><Link to="/weight-converter">Weight Converter</Link></li>
       <li><Link to="/time-converter">Time Converter</Link></li>
       <li><Link to="/power-converter">Power Converter</Link></li>
       <li><Link to="/volume-converter">Volume Converter</Link></li>

                            <Logout />
                        </>
                    ) : (
                        <>
                        
                           <li><Link to="/login">Login</Link></li> 
                            <li><Link to="/signup">Signup</Link></li> 
                        </>
                    )}
                    </ul>
                </nav>

          </div>

            <div className="App">

           
            
  <header className="App-header">
    <img src={logo} className="App-log" alt="logo" />
    </header>
    
    <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/byte-converter" element={<ByteConverter />} />
                    <Route path="/temp-converter" element={<TemperatureConverter />} />
                    <Route path="/age-calculator" element={<AgeCalculator />} />
                    <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
                    <Route path="/feedback" element={<Feedback />} /> {/* Add Feedback route */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/area-converter" element={<AreaConverter />} />
                    <Route path="/speed-converter" element={<SpeedConverter />} />
                    <Route path="/weight-converter" element={<WeightConverter />} />
                    <Route path="/time-converter" element={<TimeConverter />} />
                    <Route path="/power-converter" element={<PowerConverter />} />
                    <Route path="/volume-converter" element={<VolumeConverter />} />
                </Routes>
            </div>
            
            
  
</div>
<div className='Apple-header'>

<div className='nitin'>

<img src={logo} className="App-logl" alt="logo" />
</div>
  <ul>
       <li><Link to="/contact">Contact</Link></li> {/* Add Contact link */}
       <li><Link to="/feedback">Feedback</Link></li> {/* Add Feedback link */}
  </ul>
</div>
<div className='satya'>
        <img src={logo} className="Abcd-logl" alt="logo" />
      </div>


        </Router>
    );
}

export default App;

