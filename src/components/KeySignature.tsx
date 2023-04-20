
import React, { useState, useEffect } from 'react'
import { AFlatMajior, CFlatMajior, DFlatMajior, EFlatMajior, GFlatMajior } from '../Notes'

const keySignatures = {
    "EFlatMajior": { accidental: "♭", notes: EFlatMajior },
    "AFlatMajior": { accidental: "♭", notes: AFlatMajior },
    "CFlatMajior": { accidental: "♭", notes: CFlatMajior },
    "DFlatMajior": { accidental: "♭", notes: DFlatMajior },
    "GFlatMajior": { accidental: "♭", notes: GFlatMajior },
}

export default function KeySignature({ keySignature }) {
    return (
        <div className="keySignature">
            {
                keySignatures[keySignature].notes.map((note, idx) =>
                (
                    <div className='key-signature-notes' key={idx} style={{ top: `${note.yPosition}px`, left: `${note.left}px` }}>
                        <div className='note'>
                            <span>♭</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}