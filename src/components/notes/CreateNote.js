import React, { useState } from 'react';
import { createNote } from '../../firebase/actions';
import { useUser } from '../../firebase/AuthProvider';

const CreateNote = () => {
  const user = useUser();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    createNote({ title, body, author: user.email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={({ target }) => setTitle(target.value)} />
      <textarea value={body} onChange={({ target }) => setBody(target.value)} />
      <button>Create</button>
    </form>
  );
};

export default CreateNote;
