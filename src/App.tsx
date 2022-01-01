import React, { useState, useEffect } from 'react';
import SheetMusic from '@slnsw/react-sheet-music';
import logo from './images/staff.png';
import Note from './components/Note'
import * as Notes from './Notes'
import './App.css';

function App() {
  const [currentNote, setCurrentNote] = useState('ABCDEFG')


  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  } 

  return (
    <div className="App">
      <header className="App-header">

        <div style={{paddingBottom: '20vh'}}></div>

        {/* Sheet Music */}
        <div className='sheet-music'>

          <div id="staves">

            {/* Treble Cleff Upper ledgers */}
            <div className="ledgers" style={{top: '-110px', right: '0px'}}>
              <div className="ledger">𝄖</div>
              <div className="ledger">𝄖</div>
              <div className="ledger">𝄖</div>
              <div className="ledger">𝄖</div> 
            </div>

            {/* Treble Cleff */}
            <div id="treble-cleff" className='staff'> 𝄚𝄚𝄚𝄚
              <div className='signature'>
                𝄞
              </div>
            </div>

            {/* Treble Cleff Lower Ledgers */}
            <div className="ledgers" style={{top: '54px', right: '0px'}}>
              <div className="ledger">𝄖</div> 
              <div className="ledger">𝄖</div>
              <div className="ledger">𝄖</div>
              <div className="ledger">𝄖</div> 
            </div>

            <div style={{marginBottom: '50px'}}></div>

            {/* Base Cleff */}
            <div id="base-clef" className='staff'> 𝄚𝄚𝄚𝄚 
                <div className='signature'> 
                  𝄢
                </div>
            </div>

            <div className="ledgers" style={{top: '222px', right: '0px'}}>
              <div className="ledger">𝄖</div>
              <div className="ledger">𝄖</div>
              <div className="ledger">𝄖</div>
              <div className="ledger">𝄖</div> 
            </div>
            
          </div>

          <Note noteLetters={Notes.G5Trebble}/>

        </div>
      </header>
    </div>
  );
}

export default App;
