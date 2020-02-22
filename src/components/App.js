import React from 'react';
import { useFirestore } from '../firebase/hooks';
import { notesCollection } from '../firebase/firebase';

export default function App() {
  const notesByRyan = useFirestore(notesCollection.orderBy('createdAt').where('author', '==', 'ryan'));
  return <h1>Hello World</h1>;
}
