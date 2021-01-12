import React, {useState} from 'react';
import DrumPad from './drumpad.js';
import Panel from './panel.js';
import data from '../data.js';
import '../App.css';


const App = () => {
  const [display, setDisplay] = useState('');
  const [power, setPower] = useState(true)
  
 const handleClick = (name) => {
   if (power) {
   setDisplay(name)
  } else if (power === false) {
    setDisplay('');
  }
 }
 
 const handlePower = () => {
   setPower(!power)
   setDisplay('');
 }

    return(
      <>
      <h1 className="text-center">Drum Machine</h1>
      <div className="container-fluid" id="drum-machine">  
      <div className="card">
        <div className="card-body">
        <div className="row">
           <div className="col-md-8">
           {data.map(element => 
            <div key={element} className="row justify-content-center">
              {element.map(letter => 
                <DrumPad drumKey={letter.key} name={letter.name} handleClick={handleClick} src={letter.src} power={power} id={letter.name}/> 
              )}
            </div>
              )}      
          </div>
        <Panel handlePower={handlePower} message={display} power={power}/>
        </div>
        </div>
       </div>
      </div>
      </>
    )
}

export default App;
