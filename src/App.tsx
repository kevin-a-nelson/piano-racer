import React, { useState, useEffect } from 'react';
import SheetMusic from '@slnsw/react-sheet-music';
import logo from './images/staff.png';
import './App.css';

function App() {
  const [xoffset, setXoffset] = useState(0);
  const [yoffset, setYoffset] = useState(0);
  const [counter, setCounter] = useState(0);
  const [delta, setDelta] = useState(1);


  function moveNoteLeft() {
    const newXoffset = xoffset + delta;
    setXoffset(newXoffset)
  }

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      counter += delta;
      if (counter > 800) {
        setXoffset(0)
        counter = 0;
      } else {
        setXoffset((xoffset) => xoffset + delta)
      }
    }, 5);

      return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {counter}
      <header className="App-header">
        <div className='music-notes'>
          <div className='staff'>
              𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚
            <div className='signature'>
              𝄞
            </div>
          </div>
          <div className='staff'>
              𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚
            <div className='signature'>
              𝄢
            </div>
            <div className='notes'>
              <div className='note' style={{right: xoffset}}>
                𝅝
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
