import React, { useState, useEffect } from 'react';
import Note from './components/Note'
import * as Notes from './Notes'
import './App.css';
import 'react-piano/dist/styles.css';
import UnstyledSelectSimple from './components/UnstyledSelectSimple';
import { AFlatMajior, CFlatMajior, DFlatMajior, EFlatMajior, GFlatMajior } from './Notes'

import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import KeySignature from './components/KeySignature';
import { Button } from '@mui/material';

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

const keySignatures = {
    "EFlatMajior": EFlatMajior,
    "AFlatMajior": AFlatMajior,
    "CFlatMajior": CFlatMajior,
    "DFlatMajior": DFlatMajior,
    "GFlatMajior": GFlatMajior,
}

export const A7Trebble = {
    letter: 'A',
    octave: 7,
    stave: 'Treble',
    showLedgers: [0, 1, 2, 3],
    yPosition: 1
}

const keySignatureOptions = [
  {value: "EFlatMajior", text: "E♭ Majior"},
  {value: "AFlatMajior", text: "A♭ Majior"},
  {value: "DFlatMajior", text: "D♭ Majior"},
  {value: "EFlatMajior", text: "E♭ Majior"},
  {value: "CFlatMajior", text: "C♭ Majior"},
]

const DEFAULT_KEY_SIGNATURE = "EFlatMajior"

const START_TIME = 60

function App() {
  const [currentNote, setCurrentNote] = useState(A7Trebble)
  const [showLedgers, setShowLedgers] = useState(DefaultShowLedgers())
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0)
  const [selectedKeySignature, setSelectedKeySignature] = useState(DEFAULT_KEY_SIGNATURE)
  const [time, setTime] = useState(START_TIME)

  const firstNote = MidiNumbers.fromNote('c4');
  const lastNote = MidiNumbers.fromNote('b4');

  useEffect(() => {
    setRandomNote()
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {

      if(time > 0) {
        setTime((time) => time - 1)
      }

    }, 1000);
    return () => clearInterval(interval);
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
      59: 'B',
      60: 'C',
      61: 'C#',
      62: 'D',
      63: 'D#',
      64: 'E',
      65: 'F',
      66: 'F#',
      67: 'G',
      68: 'G#',
      69: 'A',
      70: 'A#',
      71: 'B',
      72: 'C',
    }[midiNumber]
  }

  function onPlayPianoInput(midiNumber) {

    let keySignatureFlats = keySignatures[selectedKeySignature].map((keySignature) => keySignature.letter)
    let isFlat = keySignatureFlats.includes(currentNote['letter'])


    if(isFlat) {
      midiNumber += 1
    }

    const inputLetter = midiNumberToLetter(midiNumber)

    console.table({
      isFlat,
      inputLetter,
      currentNote: currentNote['letter'],
    })

    if(inputLetter === currentNote['letter']) {
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

  function getAccuracy() {
    return Math.floor((correctAnswerCount / ( correctAnswerCount + wrongAnswerCount )) * 100)
  }

  function accuracyText() {
    if(correctAnswerCount + wrongAnswerCount === 0) {
      return '--'
    }
    return `${getAccuracy()}%`
  }

  function timeText() {
    if(time === 60) {
      return '1:00'
    }

    if( time <= 0) {
      return `00:00`
    }

    if(time < 10) {
      return `00:0${time}`
    }

    if(time < 60) {
      return `00:${time}`
    }

  }

  function restart() {
    setTime((time) => START_TIME)
    setCorrectAnswerCount((correctAnswerCount) => 0)
    setWrongAnswerCount((wrongAnswerCount) => 0)
  }
   
  return (
    <div className="App">

        <div style={{height: '5vh'}}></div>

        <div className='stats'>
          <div className='statNumbers'>
            <div>
              <span>Time</span>
              <br></br>
              <span>{timeText()}</span>
            </div>
            <div>
              <span>Score</span>
              <br></br>
              <span>{`${correctAnswerCount}`}</span>
            </div>
            <div>
              <span>Score</span>
              <br></br>
              <span>{accuracyText()}</span>
            </div>
          </div>
        </div>

        <div style={{height: '5vh'}}></div>

        <div className='contents'>
        {
          time <= 0 ?
          <div className="settings">
            <div className="vertical-center">
              <div className="horizontal-center">
                <UnstyledSelectSimple options={keySignatureOptions} defaultValue={DEFAULT_KEY_SIGNATURE} onChange={setSelectedKeySignature}/>
                <hr style={{width: "60px" }}></hr>
                <Button style={{color: "white" }} onClick={() => restart()} size="medium">Start</Button>
              </div>
            </div>
          </div>
          :
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

            <KeySignature keySignature={selectedKeySignature} />
            <Note note={currentNote}/>

          </div>

        }
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
          width={300}
        />
      </div>
    </div>
  );
}

export default App;
