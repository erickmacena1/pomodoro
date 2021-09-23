import React from 'react';
import Timer from './components/Timer';

function App() {
  return (
    <main className="position-absolute top-50 start-50 translate-middle">
      <h1 className="text-center text-warning">Pomodoro</h1>
      <Timer timeLimit="25" breakLimit="5"></Timer>
    </main>
  );
}

export default App;
