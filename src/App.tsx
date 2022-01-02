import React, { useState, useEffect } from 'react';
import Note from './components/Note'
import * as Notes from './Notes'
import './App.css';
import 'react-piano/dist/styles.css';

import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';

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
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0)

  const firstNote = MidiNumbers.fromNote('c4');
  const lastNote = MidiNumbers.fromNote('b4');

  useEffect(() => {
    setRandomNote()
  }, []);

  function setRandomNote() {

    const randomNote = Notes.getRandomNote()
    const noteLedgers = randomNote.showLedgers

    setCurrentNote((currentNote) => randomNote)

    const newShowLedgers = DefaultShowLedgers()

    for(let i = 0; i < noteLedgers.length; i++) {
      const ledgerToShow = noteLedgers[i];
      newShowLedgers[ledgerToShow] = true
    }

    setShowLedgers((showLedgers) => newShowLedgers)

  }

  function midiNumberToLetter(midiNumber) {
    return {
      60: 'C',
      62: 'D',
      64: 'E',
      65: 'F',
      67: 'G',
      69: 'A',
      71: 'B',
    }[midiNumber]
  }

  function onPlayPianoInput(midiNumber) {

    const inputLetter = midiNumberToLetter(midiNumber)

    if(currentNote['letter'] === inputLetter) {
      setCorrectAnswerCount((correctAnswerCount) => correctAnswerCount + 1)
    } else {
      setWrongAnswerCount((wrongAnswerCount) => wrongAnswerCount + 1)
    }

    setRandomNote()
    return
  }
  
  return (
    <div className="App">

        <div style={{height: '3vh'}}></div>

        <span>{`Score ${correctAnswerCount}`}</span>
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

          {/* {displayNote()} */}
          <Note note={currentNote}/>

        </div>

      <div style={{marginBottom: '100px'}}></div>

      <div className='piano'>
        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          onPlayNoteInput={(midiNumber) => onPlayPianoInput(midiNumber)}
          playNote={(midiNumber) => {
            // Play a given note - see notes below
          }}
          stopNote={(midiNumber) => {
            // Stop playing a given note - see notes below
          }}
          width={300}
        />
      </div>
    </div>
  );
}

export default App;
