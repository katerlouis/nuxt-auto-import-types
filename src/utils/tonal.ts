import { Note } from 'tonal';

// 
// 
export type TonalNote = {
  empty: boolean,
  acc: string,
  alt: number,
  chroma: number,
  coord: Array<number>,
  freq: number,
  letter: string,
  midi: number,
  name: string,
  oct: number,
  pc: string,
  step: number,
}

// 
// 
export type MyNote = number | string | TonalNote;

//
//
export const getNote = (x: MyNote): TonalNote => {
  // its midi
  if (typeof x === 'number') {
    // defaults to flat notes with `b` accidental
    x = Note.get(Note.fromMidi(x)) as TonalNote;

    // to get sharps with `#`, do:
    // x = Note.get(Note.fromMidiSharps(x));
  }

  // Its probably a note name
  else if (typeof x === 'string') {
    x = Note.get(x) as TonalNote;
  }

  // its already a tonal Note obj
  // else if (typeof x === 'object' && !x.empty) {
  //   x = x; // ??
  // }

  return x as TonalNote;
};