import React, { useState, useEffect } from 'react'
import * as Notes from '../Notes'

const UNANSERED_COLOR = 'black'
const CORRECT_ANSWER_COLOR = 'green'
const WRONG_ANSWER_COLOR = 'red'



export default function Note({noteLetters}: any) {
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [answeredIncorrectly, setAnsweredIncorrectly] = useState(false);
  const [color, setColor] = useState(UNANSERED_COLOR);
  

    return (
        <div id='notes' style={{ top: noteLetters[0].yPosition, right: '36.5px'}}>
            <div className='note'>
                <span>𝅝</span>
            </div>
        </div>
    )
}