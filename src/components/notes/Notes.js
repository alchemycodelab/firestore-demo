import React from 'react';
import { useFirestore } from '../../firebase/hooks';
import { notesCollection } from '../../firebase/firebase';

const Notes = () => {
  const notes = useFirestore(notesCollection, []);
  const noteElements = notes.map(note => (
    <li key={note.id}>
      <h3>{note.title}</h3>
      <p>{note.author}</p>
      <p>{note.body}</p>
    </li>
  ));

  return (
    <ul>
      {noteElements}
    </ul>
  );
};

export default Notes;
