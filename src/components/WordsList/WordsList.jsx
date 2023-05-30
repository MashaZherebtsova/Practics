import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Table, Th, Head, Wrapper } from './WordsList.styled';
import WordsListItem from './WordsListItem';

export default function WordsList({
  words,
  deleteWord,
  onFilterChange,
  toggleChecked,
  checkAllWords,
}) {
  const [status, setStatus] = useState('check');
  const handleCheckAll = () => {
    if (status === 'check') {
      setStatus('uncheck');
      checkAllWords(status);
      return;
    }
    setStatus('check');
    checkAllWords(status);
  };
  return (
    <Wrapper>
      <TextField
        onChange={onFilterChange}
        name="enWord"
        label="Search words"
        variant="standard"
      />
      <Table>
        <Head>
          <tr>
            <Th>
              <input onChange={handleCheckAll} type="checkbox"></input> All
            </Th>
            <Th>Number</Th>
            <Th>English words</Th>
            <Th>Ukrainian translate</Th>
            <Th>Actions</Th>
          </tr>
        </Head>
        <tbody>
          {words.map(({ id, uaWord, enWord, checked }, index) => (
            <WordsListItem
              id={id}
              uaWord={uaWord}
              enWord={enWord}
              checked={checked}
              index={index}
              toggleChecked={toggleChecked}
              deleteWord={deleteWord}
            />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}
