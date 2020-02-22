import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AuthProvider, withSession } from '../firebase/AuthProvider';
import CreateNote from './notes/CreateNote';
import Notes from './notes/Notes';

const Home = () => (
  <>
    <CreateNote />
    <Notes />
  </>
);

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" component={withSession(Home)} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
