import './App.css';
import H1  from '../src/sounds/Heater-1.mp3';
import H2 from '../src/sounds/Heater-2.mp3';
import H3 from '../src/sounds/Heater-3.mp3';
import H4 from '../src/sounds/Heater-4_1.mp3';
import CH from '../src/sounds/Cev_H2.mp3';
import OH from '../src/sounds/Dsc_Oh.mp3';
import Kick1 from '../src/sounds/Kick_n_Hat.mp3';
import Kick2 from '../src/sounds/RP4_KICK_1.mp3';




function App() {
  return (
    <div className="App">
      <div id="drum-machine"> 
        <div id='display'></div>
        <div id='drum-pad-container'>

        </div>
      </div>
    </div>
  );
}

export default App;
