import React, { useState, useEffect } from 'react';
import SheetMusic from '@slnsw/react-sheet-music';
import logo from './images/staff.png';
import Note from './components/Note'
import * as Notes from './Notes'
import './App.css';

function App() {
  const [currentNote, setCurrentNote] = useState({})


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
    setCurrentNote((currentNote) => Notes.getRandomNote())
  }
  
  return (
    <div className="App">

        <div style={{paddingBottom: '25px'}}></div>

        {/* Sheet Music */}
        <div className='sheet-music'>

          <div id="staves">
            {/* Upper Cleff */}

            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>

            {/* Treble Cleff */}

            <div id="trebleClef" className="signature">𝄞</div>

            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>

            {/* In between */}

            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>

            {/* Base Cleff */}
            
            <div id="baseClef" className="signature">𝄢</div>

            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>
            <div className="staff">𝄖𝄖𝄖𝄖</div>

            {/* Lower cleff */}
            
            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>
            <div className="ledger">𝄖</div>

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
