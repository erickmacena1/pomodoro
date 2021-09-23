import React from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="container">
      <Timer timeLimit="25"></Timer>
    </div>
  );
}

export default App;
