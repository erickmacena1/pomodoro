import React from 'react';
import Timer from './components/Timer';
import clickPath1 from './assets/click1.wav';
import clickPath2 from './assets/click2.wav';

const clickAudio1 = new Audio(clickPath1);
const clickAudio2 = new Audio(clickPath2);

function App() {
  return (
    <main className="position-absolute top-50 start-50 translate-middle">
      <h1 className="text-center text-warning">Pomodoro</h1>
      <Timer timeLimit="25" breakLimit="5" 
      clickAudio1={clickAudio1} clickAudio2={clickAudio2}>
      </Timer>
      <a className="text-center text-warning text-decoration-none" href="https://github.com/erickmacena1" target="_blank" rel="author noreferrer">
        <h3 className="mb-0 mt-2">Erick Macena</h3>
      </a>

    </main>
  );
}

export default App;
