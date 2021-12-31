import React, { useState, useEffect } from 'react';
import SheetMusic from '@slnsw/react-sheet-music';
import logo from './images/staff.png';
import Note from './components/Note'
import './App.css';

function App() {
  const [xoffset, setXoffset] = useState(0);
  const [yoffset, setYoffset] = useState(0);
  const [counter, setCounter] = useState(0);
  const [delta, setDelta] = useState(1);
  const [currentNotes, setCurrentNotes] = useState('')


  function moveNoteLeft() {
    const newXoffset = xoffset + delta;
    setXoffset(newXoffset)
  }

  const Notes = () => {
    const newNotes = []
    for(let i = 0; i < currentNotes.length; i++) {
      newNotes.push(<Note />)
    }
    return newNotes
  }


  useEffect(() => {
    const interval = setInterval(() => {
      // let newCurrentNotes = currentNotes
      // newCurrentNotes += 'g';

      setCurrentNotes((currentNotes) => currentNotes + 'g')
    }, 2000);

      return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {counter}
      <header className="App-header">

        {/* Sheet Music */}
        <div className='sheet-music'>

          <div id="staves">

            {/* Treble Cleff */}
            <div id="treble-cleff" className='staff'> 𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚
              <div className='signature'>
                𝄞
              </div>
            </div>

            {/* Base Cleff */}
            <div id="base-clef" className='staff'> 𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚𝄚 
                <div className='signature'> 
                  𝄢
                </div>
            </div>
            
          </div>

          {/* Notes */}
          <div id='notes'>
            {Notes()}
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
