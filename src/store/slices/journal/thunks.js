import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote } from './journalSlice';

export function startNewEmptyNote() {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: Date.now(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

    await setDoc(newDoc, newNote);

    dispatch(setActiveNote(newNote));
    dispatch(addNewEmptyNote(newNote));
  };
}
