import React from 'react';
import Timer from './components/Timer';
import clickPath1 from './assets/click1.wav';
import clickPath2 from './assets/click2.wav';
import alarmPath1 from './assets/alarm1.wav';
import alarmPath2 from './assets/alarm2.wav';

const clickAudio1 = new Audio(clickPath1);
const clickAudio2 = new Audio(clickPath2);
const alarmAudio1 = new Audio(alarmPath1);
const alarmAudio2 = new Audio(alarmPath2);

let Audios = {
  'clickAudio1': clickAudio1,
  'clickAudio2': clickAudio2,
  'alarmAudio1': alarmAudio1,
  'alarmAudio2': alarmAudio2
};

Object.values(Audios).forEach(audio => {
  audio.volume = 0.3;
})

function App() {
  return (
    <main className="position-absolute top-50 start-50 translate-middle">
      <h1 className="text-center text-warning">Pomodoro</h1>
      <Timer 
        workTimeMins="25" 
        shortBreakMins="5"
        longBreakMins="15"
        maxSeries="4"
        audios={Audios}>
      </Timer>
      <a className="text-center text-warning text-decoration-none" href="https://github.com/erickmacena1" target="_blank" rel="author noreferrer">
        <h3 className="mb-0 mt-2">Erick Macena</h3>
      </a>

    </main>
  );
}

export default App;
