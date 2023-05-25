import React, { useState, useEffect } from 'react';
import H1 from './sounds/Heater-1.mp3';
import H2 from './sounds/Heater-2.mp3';
import H3 from './sounds/Heater-3.mp3';
import H4 from './sounds/Heater-4_1.mp3';
import H5  from './sounds/Heater-6.mp3';
import CH from './sounds/Cev_H2.mp3';
import OH from './sounds/Dsc_Oh.mp3';
import Kick1 from './sounds/Kick_n_Hat.mp3';
import Kick2 from './sounds/RP4_KICK_1.mp3';
import './App.css';



const drumPads = [
  {
    id: 'Heater-1',
    key: 'Q',
    src: H1,
    name: 'Heater-1',
  },
  {
    id: 'Heater-2',
    key: 'W',
    src: H2,
    name: 'Heater-2',
  },
  {
    id: 'Heater-3',
    key: 'E',
    src: H3,
    name: 'Heater-3',
  },
  {
    id: 'Heater-4',
    key: 'A',
    src: H4,
    name: 'Heater-4',
  },
  {
    id: 'Clap',
    key: 'S',
    src: CH,
    name: 'Clap',
  },
  {
    id: 'Open-HH',
    key: 'D',
    src: OH,
    name: 'Open-HH',
  },
  {
    id: 'Kick-n-Hat',
    key: 'Z',
    src: Kick1,
    name: 'Kick-n-Hat',
  },
  {
    id: 'Kick',
    key: 'X',
    src: Kick2,
    name: 'Kick',
  },
  {
    id: 'Heater-6',
    key: 'C',
    src: H5,
    name: 'Heater-6',
  }
];

function App() {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      const drumPad = drumPads.find((pad) => pad.key === e.key.toUpperCase());
      if (drumPad) {
        playAudio(drumPad);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const playAudio = (drumPad) => {
    const audio = document.getElementById(drumPad.key);
    audio.currentTime = 0;
    audio.play();
    setDisplay(drumPad.name);
  };

  return (
<div className="App">
  <div id="drum-machine">
    <div id="title">Drum Machine</div>
    <div id="display">{display}</div>
    <div id="drum-pad-container">
      {drumPads.map((pad) => (
        <div
          key={pad.id}
          className="drum-pad"
          id={pad.id}
          onClick={() => playAudio(pad)}
        >
          {pad.key}
          <audio className="clip" id={pad.key} src={pad.src}></audio>
        </div>
      ))}
    </div>
    <h2 id='how'>You can use the keyboard or click the pads</h2>
  </div>
</div>
  );
}

export default App;