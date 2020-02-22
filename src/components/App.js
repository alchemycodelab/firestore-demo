import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AuthProvider, withSession } from '../firebase/AuthProvider';
import CreateNote from './notes/CreateNote';
import Notes from './notes/Notes';
import { useFirestore } from '../firebase/hooks';

const Home = () => (
  <>
    <CreateNote />
    <Notes />
  </>
);

const NotesBy = ({ match }) => {
  const notesBy = useFirestore(notesCollection.where('author', '==', match.params.author));

  return (
    <ul>
      {notesBy.map(note => (
        <li key={note.id}>
          {note.title}
        </li>
      ))}
    </ul>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={withSession(Home)} />
          <Route exact path="/:author" component={withSession(NotesBy)} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
