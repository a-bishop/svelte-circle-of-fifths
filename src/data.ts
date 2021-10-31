// Hash table of key signatures, where the key is the number of sharps (positive) or flats (negative).
// The value is an array of note names in the key signature, starting at the 12:00 clock position
// and ending at the 11:00 position.
const keySignatures = {
    '-10': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '-9': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '-8': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '-7': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '-6': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '-5': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '-4': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '-3': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '-2': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '-1': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '0': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '1': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
    '2': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'A♭', 'E♭', 'B♭', 'F'],
    '3': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'E♭', 'B♭', 'F'],
    '4': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'B♭', 'F'],
    '5': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'F'],
    '6': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
    '7': ['B♯', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
    '8': ['B♯', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
    '9': ['B♯', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
    '10': ['B♯', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯']
};

// corresponds to the css values for positioning things at each pie segment,
// starting at the 12:00 clock position and ending at the 11:00 position.
const positions = [
    {
        angle: '-15deg',
        scaleDegree: {
            top: '115px',
            left: '200px'
        },
        arrow: {
            top: '151px',
            left: '240px',
            rotate: '0deg'
        }
    },
    {
        angle: '15deg',
        scaleDegree: {
            top: '130px',
            left: '265px'
        },
        arrow: {
            top: '163px',
            left: '288px',
            rotate: '30deg'
        }
    },
    {
        angle: '45deg',
        scaleDegree: {
            top: '175px',
            left: '310px'
        },
        arrow: {
            top: '200px',
            left: '325px',
            rotate: '60deg'
        }
    },
    {
        angle: '75deg',
        scaleDegree: {
            top: '235px',
            left: '325px'
        },
        arrow: {
            top: '248px',
            left: '337px',
            rotate: '90deg'
        }
    },
    {
        angle: '105deg',
        scaleDegree: {
            top: '305px',
            left: '310px'
        },
        arrow: {
            top: '295px',
            left: '324px',
            rotate: '120deg'
        }
    },
    {
        angle: '135deg',
        scaleDegree: {
            top: '345px',
            left: '265px'
        },
        arrow: {
            top: '328px',
            left: '290px',
            rotate: '150deg'
        }
    },
    {
        angle: '165deg',
        scaleDegree: {
            top: '360px',
            left: '200px'
        },
        arrow: {
            top: '341px',
            left: '240px',
            rotate: '180deg'
        }
    },
    {
        angle: '195deg',
        scaleDegree: {
            top: '345px',
            left: '140px'
        },
        arrow: {
            top: '328px',
            left: '194px',
            rotate: '-150deg'
        }
    },
    {
        angle: '225deg',
        scaleDegree: {
            top: '305px',
            left: '100px'
        },
        arrow: {
            top: '295px',
            left: '160px',
            rotate: '-120deg'
        }
    },
    {
        angle: '255deg',
        scaleDegree: {
            top: '235px',
            left: '80px'
        },
        arrow: {
            top: '248px',
            left: '146px',
            rotate: '-90deg'
        }
    },
    {
        angle: '285deg',
        scaleDegree: {
            top: '175px',
            left: '95px'
        },
        arrow: {
            top: '200px',
            left: '158px',
            rotate: '-60deg'
        }
    },
    {
        angle: '315deg',
        scaleDegree: {
            top: '130px',
            left: '140px'
        },
        arrow: {
            top: '164px',
            left: '194px',
            rotate: '-30deg'
        }
    }
];

const tonicMap = {
    C: { rotation: 11, arrowPosition: 0, kSig: 1, relativeMinor: 'a' },
    G: { rotation: 0, arrowPosition: 1, kSig: 2, relativeMinor: 'e' },
    D: { rotation: 1, arrowPosition: 2, kSig: 3, relativeMinor: 'b' },
    A: { rotation: 2, arrowPosition: 3, kSig: 4, relativeMinor: 'f♯' },
    E: { rotation: 3, arrowPosition: 4, kSig: 5, relativeMinor: 'c♯' },
    B: { rotation: 4, arrowPosition: 5, kSig: 6, relativeMinor: 'g♯' },
    'G♭': { rotation: 5, arrowPosition: 6, kSig: -5, relativeMinor: 'e♭' },
    'D♭': { rotation: 6, arrowPosition: 7, kSig: -4, relativeMinor: 'b♭' },
    'A♭': { rotation: 7, arrowPosition: 8, kSig: -3, relativeMinor: 'f' },
    'E♭': { rotation: 8, arrowPosition: 9, kSig: -2, relativeMinor: 'c' },
    'B♭': { rotation: 9, arrowPosition: 10, kSig: -1, relativeMinor: 'g' },
    F: { rotation: 10, arrowPosition: 11, kSig: 0, relativeMinor: 'd' },
    'D♯': { rotation: 8, arrowPosition: 9, kSig: 10, relativeMinor: 'b♯' },
    'G♯': { rotation: 7, arrowPosition: 8, kSig: 9, relativeMinor: 'e♯' },
    'C♯': { rotation: 6, arrowPosition: 7, kSig: 8, relativeMinor: 'a♯' },
    'F♯': { rotation: 5, arrowPosition: 6, kSig: 7, relativeMinor: 'd♯' }
};

const degrees = ['IV', 'I', 'V', 'II', 'vi', 'iii', 'vii'];

export {
    keySignatures,
    positions,
    tonicMap,
    degrees,
}