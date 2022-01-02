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

export const A7Trebble = {
    letter: 'A',
    octave: 7,
    stave: 'Treble',
    showLedgers: [0, 1, 2, 3],
    yPosition: `1px`
}

function App() {
  const [currentNote, setCurrentNote] = useState(A7Trebble)
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

    console.log(newShowLedgers)

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
      setRandomNote()
    } else {
      setWrongAnswerCount((wrongAnswerCount) => wrongAnswerCount + 1)
    }

    return
  }

  function isInvisible(idx) {

    if(showLedgers[idx]) {
      return ''
    }

    return 'invisible'
  }
  
  return (
    <div className="App">

        <div style={{height: '1vh'}}></div>

        <span>{`Score ${correctAnswerCount / 2}`}</span>
        {/* Sheet Music */}
        <div className='sheet-music'>


          <div id="staves">
            {/* Treble Cleff */}

            <div className='stavesContainer'>
              <div id="trebleClef" className="signature">𝄞</div>
              <div className={`staff ledger ${isInvisible(0)}`}>𝄖</div>
              <div className={`staff ledger ${isInvisible(1)}`}>𝄖</div>
              <div className={`staff ledger ${isInvisible(2)}`}>𝄖</div>
              <div className={`staff ledger ${isInvisible(3)}`}>𝄖</div>
              <div className="staff">𝄖</div>
              <div className="staff">𝄖</div>
              <div className="staff">𝄖</div>
              <div className="staff">𝄖</div>
              <div className="staff">𝄖</div>
              <div className={`staff ledger ${isInvisible(4)}`}>𝄖</div>
              <div className={`staff ledger ${isInvisible(5)}`}>𝄖</div>
              <div className={`staff ledger ${isInvisible(6)}`}>𝄖</div>
              <div className={`staff ledger ${isInvisible(7)}`}>𝄖</div>
              <div className={`staff ledger ${isInvisible(8)}`}>𝄖</div>
              <div className={`staff ledger ${isInvisible(9)}`}>𝄖</div>
              <div id="baseClef" className="signature">𝄢</div>
              <div className="staff">𝄖</div>
              <div className="staff">𝄖</div>
              <div className="staff">𝄖</div>
              <div className="staff">𝄖</div>
              <div className="staff">𝄖</div>
              <div className={`staff ledger ${isInvisible(10)}`}>𝄖</div>
              <div className={`staff ledger ${isInvisible(11)}`}>𝄖</div>
              <div className={`staff ledger ${isInvisible(12)}`}>𝄖</div>
              <div className={`staff ledger ${isInvisible(13)}`}>𝄖</div>
            </div>
            

          </div>

          {/* {displayNote()} */}
          <Note note={currentNote}/>

        </div>


      <div style={{height: '1vh'}}></div>

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
          width={250}
        />
      </div>
    </div>
  );
}

export default App;
