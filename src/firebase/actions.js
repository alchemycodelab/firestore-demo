import { notesCollection } from './firebase';

export const createNote = note => notesCollection.add(note);
export const updateNote = (id, note) => notesCollection.doc(id).update(note);
export const deleteNote = id => notesCollection.doc(id).delete();
