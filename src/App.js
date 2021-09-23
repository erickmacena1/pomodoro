import React from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="container">
      <Timer currentTime="25" timeLimit="10"></Timer>
    </div>
  );
}

export default App;
