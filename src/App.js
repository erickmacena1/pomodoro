import React from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <main className="container">
      <Timer timeLimit="25" breakLimit="5"></Timer>
    </main>
  );
}

export default App;
