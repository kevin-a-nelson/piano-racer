
const A7Position = -65
const wholeStep = 9
const halfStep = 8

const B5TrebbleLeft = 78
const leftStep = 15

export const A7Trebble = {
    letter: 'A',
    octave: 7,
    stave: 'Treble',
    showLedgers: [0, 1, 2, 3],
    yPosition: A7Position
}

export const G7Trebble = {
    letter: 'G',
    octave: 7,
    stave: 'Treble',
    showLedgers: [0, 1, 2, 3],
    yPosition: A7Position + halfStep
}

export const F7Trebble = {
    letter: 'F',
    octave: 7,
    stave: 'Treble',
    showLedgers: [1, 2, 3],
    yPosition: A7Position + halfStep * 2
}

export const E7Trebble = {
    letter: 'E',
    octave: 7,
    stave: 'Treble',
    showLedgers: [1, 2, 3],
    yPosition: A7Position + halfStep * 3
}

export const D7Trebble = {
    letter: 'D',
    octave: 7,
    stave: 'Treble',
    showLedgers: [2, 3],
    yPosition: A7Position + halfStep * 4
}

export const C7Trebble = {
    letter: 'C',
    octave: 7,
    stave: 'Treble',
    showLedgers: [2, 3],
    yPosition: A7Position + halfStep * 5
}

export const B6Trebble = {
    letter: 'B',
    octave: 6,
    stave: 'Treble',
    showLedgers: [3],
    yPosition: A7Position + halfStep * 6
}

export const A6Trebble = {
    letter: 'A',
    octave: 6,
    stave: 'Treble',
    showLedgers: [3],
    left: B5TrebbleLeft,
    yPosition: A7Position + halfStep * 7
}

export const G6Trebble = {
    letter: 'G',
    octave: 6,
    stave: 'Treble',
    showLedgers: [],
    yPosition: A7Position + halfStep * 8
}

export const F6Trebble = {
    letter: 'F',
    octave: 6,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 6,
    yPosition: A7Position + halfStep * 9
}

export const E6Trebble = {
    letter: 'E',
    octave: 6,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep,
    yPosition: A7Position + halfStep * 10
}

export const D6Trebble = {
    letter: 'D',
    octave: 6,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 3,
    yPosition: A7Position + halfStep * 11
}

export const C6Trebble = {
    letter: 'C',
    octave: 6,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 5,
    yPosition: A7Position + halfStep * 12
}

export const B5Trebble = {
    letter: 'B',
    octave: 5,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft,
    yPosition: A7Position + halfStep * 13
}

export const A5Trebble = {
    letter: 'A',
    octave: 5,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 2,
    yPosition: A7Position + halfStep * 14
}

export const G5Trebble = {
    letter: 'G',
    octave: 5,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 4,
    yPosition: A7Position + halfStep * 15
}

export const F5Trebble = {
    letter: 'F',
    octave: 5,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 6,
    yPosition: A7Position + halfStep * 16
}

export const E5Trebble = {
    letter: 'E',
    octave: 5,
    stave: 'Treble',
    showLedgers: [],
    yPosition: A7Position + halfStep * 17
}

export const D5Trebble = {
    letter: 'D',
    octave: 5,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + halfStep * 4,
    yPosition: A7Position + halfStep * 18
}

export const C5Trebble = {
    letter: 'C',
    octave: 5,
    stave: 'Treble',
    showLedgers: [4],
    yPosition: A7Position + halfStep * 19
}

export const B4Trebble = {
    letter: 'B',
    octave: 4,
    stave: 'Treble',
    showLedgers: [4],
    yPosition: A7Position + halfStep * 20
}

export const A4Trebble = {
    letter: 'A',
    octave: 4,
    stave: 'Treble',
    showLedgers: [4, 5],
    yPosition: A7Position + halfStep * 21
}

export const G4Trebble = {
    letter: 'G',
    octave: 4,
    stave: 'Treble',
    showLedgers: [4, 5],
    left: B5TrebbleLeft + leftStep * 5,
    yPosition: A7Position + halfStep * 22
}

export const F4Trebble = {
    letter: 'F',
    octave: 4,
    stave: 'Treble',
    showLedgers: [4, 5, 6],
    yPosition: A7Position + halfStep * 23
}

export const E4Trebble = {
    letter: 'E',
    octave: 4,
    stave: 'Treble',
    showLedgers: [4, 5, 6],
    yPosition: A7Position + halfStep * 24
}

export const D4Trebble = {
    letter: 'D',
    octave: 4,
    stave: 'Treble',
    showLedgers: [4, 5, 6, 7],
    left: B5TrebbleLeft + halfStep * 4,
    yPosition: A7Position + halfStep * 25
}

export const C4Trebble = {
    letter: 'C',
    octave: 4,
    stave: 'Treble',
    showLedgers: [4, 5, 6, 7],
    yPosition: A7Position + halfStep * 26
}

export const B3Trebble = {
    letter: 'B',
    octave: 3,
    stave: 'Treble',
    showLedgers: [6, 7, 8, 9],
    yPosition: A7Position + halfStep * 27
}

export const A3Trebble = {
    letter: 'A',
    octave: 3,
    stave: 'Treble',
    showLedgers: [6, 7, 8, 9],
    yPosition: A7Position + halfStep * 28
}

export const G3Trebble = {
    letter: 'G',
    octave: 3,
    stave: 'Treble',
    showLedgers: [7, 8, 9],
    yPosition: A7Position + halfStep * 29
}

export const F3Trebble = {
    letter: 'F',
    octave: 3,
    stave: 'Treble',
    showLedgers: [7, 8, 9],
    yPosition: A7Position + halfStep * 30
}

export const E3Trebble = {
    letter: 'E',
    octave: 3,
    stave: 'Treble',
    showLedgers: [8, 9],
    yPosition: A7Position + halfStep * 31
}

export const D3Trebble = {
    letter: 'D',
    octave: 3,
    stave: 'Treble',
    showLedgers: [8, 9],
    yPosition: A7Position + halfStep * 32
}

export const C3Trebble = {
    letter: 'C',
    octave: 3,
    stave: 'Treble',
    showLedgers: [9],
    yPosition: A7Position + halfStep * 33
}

export const C5Clef = {
    letter: 'C',
    octave: 5,
    stave: 'Treble',
    showLedgers: [6, 7, 8, 9],
    yPosition: A7Position + halfStep * 22
}

export const B4Clef = {
    letter: 'B',
    octave: 4,
    stave: 'Treble',
    showLedgers: [6, 7, 8, 9],
    yPosition: A7Position + halfStep * 23
}

export const A4Clef = {
    letter: 'A',
    octave: 4,
    stave: 'Treble',
    showLedgers: [7, 8, 9],
    yPosition: A7Position + halfStep * 24
}

export const G4Clef = {
    letter: 'G',
    octave: 4,
    stave: 'Treble',
    showLedgers: [7, 8, 9],
    yPosition: A7Position + halfStep * 25
}

export const F4Clef = {
    letter: 'F',
    octave: 4,
    stave: 'Treble',
    showLedgers: [8, 9],
    yPosition: A7Position + halfStep * 26
}

export const E4Clef = {
    letter: 'E',
    octave: 4,
    stave: 'Treble',
    showLedgers: [8, 9],
    yPosition: A7Position + halfStep * 27
}

export const D4Clef = {
    letter: 'D',
    octave: 4,
    stave: 'Treble',
    showLedgers: [9],
    left: B5TrebbleLeft + halfStep * 4,
    yPosition: A7Position + halfStep * 28
}

export const C4Clef = {
    letter: 'C',
    octave: 4,
    stave: 'Treble',
    showLedgers: [9],
    yPosition: A7Position + halfStep * 29
}

export const B3Clef = {
    letter: 'B',
    octave: 3,
    stave: 'Treble',
    showLedgers: [],
    yPosition: A7Position + halfStep * 30
}

export const A3Clef = {
    letter: 'A',
    octave: 3,
    stave: 'Treble',
    showLedgers: [],
    yPosition: A7Position + halfStep * 31
}

export const G3Clef = {
    letter: 'G',
    octave: 3,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 5,
    yPosition: A7Position + halfStep * 32
}

export const F3Clef = {
    letter: 'F',
    octave: 3,
    stave: 'Treble',
    showLedgers: [],
    yPosition: A7Position + halfStep * 33
}

export const E3Clef = {
    letter: 'E',
    octave: 3,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep,
    yPosition: A7Position + halfStep * 34
}

export const D3Clef = {
    letter: 'D',
    octave: 3,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 3,
    yPosition: A7Position + halfStep * 35
}

export const C3Clef = {
    letter: 'C',
    octave: 3,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 5,
    yPosition: A7Position + halfStep * 36
}

export const B2Clef = {
    letter: 'B',
    octave: 2,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft,
    yPosition: A7Position + halfStep * 37
}

export const A2Clef = {
    letter: 'A',
    octave: 2,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 2,
    yPosition: A7Position + halfStep * 38
}

export const G2Clef = {
    letter: 'G',
    octave: 2,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 4,
    yPosition: A7Position + halfStep * 39
}

export const F2Clef = {
    letter: 'F',
    octave: 2,
    stave: 'Treble',
    showLedgers: [],
    left: B5TrebbleLeft + leftStep * 6,
    yPosition: A7Position + halfStep * 40
}

export const E2Clef = {
    letter: 'E',
    octave: 2,
    stave: 'Treble',
    showLedgers: [10],
    yPosition: A7Position + halfStep * 41
}

export const D2Clef = {
    letter: 'D',
    octave: 2,
    stave: 'Treble',
    showLedgers: [10],
    yPosition: A7Position + halfStep * 42
}

export const C2Clef = {
    letter: 'C',
    octave: 2,
    stave: 'Treble',
    showLedgers: [10, 11],
    left: B5TrebbleLeft + leftStep * 5,
    yPosition: A7Position + halfStep * 43
}

export const B1Clef = {
    letter: 'B',
    octave: 1,
    stave: 'Treble',
    showLedgers: [10, 11],
    yPosition: A7Position + halfStep * 44
}

export const A1Clef = {
    letter: 'A',
    octave: 1,
    stave: 'Treble',
    showLedgers: [10, 11, 12],
    yPosition: A7Position + halfStep * 45
}

export const G1Clef = {
    letter: 'G',
    octave: 1,
    stave: 'Treble',
    showLedgers: [10, 11, 12],
    yPosition: A7Position + halfStep * 46
}

export const F1Clef = {
    letter: 'F',
    octave: 1,
    stave: 'Treble',
    showLedgers: [10, 11, 12, 13],
    yPosition: A7Position + halfStep * 47
}

export const E1Clef = {
    letter: 'E',
    octave: 1,
    stave: 'Treble',
    showLedgers: [10, 11, 12, 13],
    yPosition: A7Position + halfStep * 48
}

export const AllNotes = [
    // A7Trebble,
    G7Trebble,
    F7Trebble,
    E7Trebble,
    D7Trebble,
    C7Trebble,

    B6Trebble,
    A6Trebble,
    G6Trebble,
    F6Trebble,
    E6Trebble,
    D6Trebble,
    C6Trebble,

    B5Trebble,
    A5Trebble,
    G5Trebble,
    F5Trebble,
    E5Trebble,
    D5Trebble,
    C5Trebble,

    B4Trebble,
    A4Trebble,
    G4Trebble,
    F4Trebble,
    E4Trebble,
    D4Trebble,
    // C4Trebble,


    // C5Clef,

    B4Clef,
    A4Clef,
    G4Clef,
    F4Clef,
    E4Clef,
    D4Clef,
    C4Clef,

    B3Clef,
    A3Clef,
    G3Clef,
    F3Clef,
    E3Clef,
    D3Clef,
    C3Clef,

    B2Clef,
    A2Clef,
    G2Clef,
    F2Clef,
    E2Clef,
    D2Clef,
    C2Clef,

    B1Clef,
    A1Clef,
    G1Clef,
    F1Clef,
    // E1Clef,
]

export const EFlatMajior = [
    B5Trebble,
    E6Trebble,
    A5Trebble,

    B2Clef,
    E3Clef,
    A2Clef
]

export const AFlatMajior = [
    ...EFlatMajior,
    D6Trebble,
    D3Clef,
]

export const DFlatMajior = [
    ...AFlatMajior,
    G5Trebble,
    G2Clef,
]

export const GFlatMajior = [
    ...DFlatMajior,
    C6Trebble,
    C3Clef,
]

export const CFlatMajior = [
    ...GFlatMajior,
    F5Trebble,
    F2Clef,
]

function getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
}

export function getRandomNote() {
    const randomIndex = getRandomInt(AllNotes.length)
    let randomNote = AllNotes[randomIndex]

    return randomNote
}
