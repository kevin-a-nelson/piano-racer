import React, { useState, useEffect } from 'react'
import * as Notes from '../Notes'

const UNANSERED_COLOR = 'black'
const CORRECT_ANSWER_COLOR = 'green'
const WRONG_ANSWER_COLOR = 'red'



export default function Note({note}: any) {

    if(!note) {
        console.table(note)
        return null
    }

    return (
        <div id='notes' style={{ top: `${note.yPosition}px`, right: '71px'}}>
            <div className='note'>
                <span>𝅘</span>
            </div>
        </div>
    )
}