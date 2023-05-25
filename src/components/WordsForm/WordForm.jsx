import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import { Margin } from '@mui/icons-material';
import { nanoid } from 'nanoid';

export const WordForm = ({ addWord }) => {
  const [uaWord, setUaWord] = useState('');
  const [enWord, setEnWord] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const word = { id: nanoid(), uaWord, enWord };
    addWord(word);
  };

  const onInputChange = e => {
    const { value, name } = e.target;
    console.log(name);
    switch (name) {
      case 'uaWord':
        setUaWord(value);
        break;
      case 'enWord':
        setEnWord(value);
        break;
      default:
        return;
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        maxWidth: '400px',
        flexDirection: 'column',
      }}
    >
      <TextField
        onInput={onInputChange}
        name="uaWord"
        label="Ukrainian word"
        variant="standard"
      />
      <TextField
        onInput={onInputChange}
        name="enWord"
        label="English word"
        variant="standard"
      />
      <Button type="submit" variant="contained">Add word</Button>
    </form>
  );
};
