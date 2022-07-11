
import React, { useState, useEffect } from 'react'
import { AFlatMajior, CFlatMajior, DFlatMajior, EFlatMajior, GFlatMajior } from '../Notes'

const keySignatures = {
    "EFlatMajior": EFlatMajior,
    "AFlatMajior": AFlatMajior,
    "CFlatMajior": CFlatMajior,
    "DFlatMajior": DFlatMajior,
    "GFlatMajior": GFlatMajior,
}

export default function KeySignature({keySignature}) {
    return (
        <div className="keySignature"> 
        { 
            keySignatures[keySignature].map((note, idx) => 
            (
                <div className='key-signature-notes' key={idx} style={{ top: `${note.yPosition + 6}px`, left: `${note.left}px`}}>
                    <div className='note'>
                        <span>♭</span>
                    </div>
                </div>
            ))
        }
        </div>
    )
}