import React, { useState, useEffect } from 'react';
import SheetMusic from '@slnsw/react-sheet-music';
import logo from './images/staff.png';
import Note from './components/Note'
import * as Notes from './Notes'
import './App.css';

function DefaultShowLedgers() {
  return [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]
} 

function App() {
  const [currentNote, setCurrentNote] = useState({})
  const [showLedgers, setShowLedgers] = useState(DefaultShowLedgers())


  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  } 

  function displayNote() {
    if (Object.keys(currentNote).length === 0) {
      return null
    } 

    return <Note noteLetters={currentNote}/>
  }

  function setRandomNote() {

    const randomNote = Notes.getRandomNote()
    const noteLedgers = randomNote[0].showLedgers

    setCurrentNote((currentNote) => randomNote)

    const newShowLedgers = DefaultShowLedgers()

    for(let i = 0; i < noteLedgers.length; i++) {
      const ledgerToShow = noteLedgers[i];
      newShowLedgers[ledgerToShow] = true
    }

    console.log(newShowLedgers)

    setShowLedgers((showLedgers) => newShowLedgers)

  }
  
  return (
    <div className="App">

        <div style={{paddingBottom: '25px'}}></div>

        {/* Sheet Music */}
        <div className='sheet-music'>

          <div id="staves">
            {/* Upper Cleff */}

            <div className={`ledger ${showLedgers[0] ? '' : 'invisible'}`}>𝄖</div>
            <div className={`ledger ${showLedgers[1] ? '' : 'invisible'}`}>𝄖</div>
            <div className={`ledger ${showLedgers[2] ? '' : 'invisible'}`}>𝄖</div>
            <div className={`ledger ${showLedgers[3] ? '' : 'invisible'}`}>𝄖</div>

            {/* Treble Cleff */}

            <div id="trebleClef" className="signature">𝄞</div>

            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>

            {/* In between */}

            <div className={`ledger ${showLedgers[4] ? '' : 'invisible'}`}>𝄖</div>
            <div className={`ledger ${showLedgers[5] ? '' : 'invisible'}`}>𝄖</div>
            <div className={`ledger ${showLedgers[6] ? '' : 'invisible'}`}>𝄖</div>
            <div className={`ledger ${showLedgers[7] ? '' : 'invisible'}`}>𝄖</div>
            <div className={`ledger ${showLedgers[8] ? '' : 'invisible'}`}>𝄖</div>
            <div className={`ledger ${showLedgers[9] ? '' : 'invisible'}`}>𝄖</div>

            {/* Base Cleff */}
            
            <div id="baseClef" className="signature">𝄢</div>

            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>

            {/* Lower cleff */}
            
            <div className={`ledger ${showLedgers[10] ? '' : 'invisible'}`}>𝄖</div>
            <div className={`ledger ${showLedgers[11] ? '' : 'invisible'}`}>𝄖</div>
            <div className={`ledger ${showLedgers[12] ? '' : 'invisible'}`}>𝄖</div>
            <div className={`ledger ${showLedgers[13] ? '' : 'invisible'}`}>𝄖</div>

          </div>

          {displayNote()}

        </div>
        <div style={{marginBottom: '100px'}}></div>

        <button onClick={() => setRandomNote()}>A</button> 
        <button>B</button> 
    </div>
  );
}

export default App;
