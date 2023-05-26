import React from 'react';
import css from './WordList.module.css'

export const WordList = ({ words, deleteWord, filter}) => {
  

    return (
    <ul className={css.wordList}>
      {words.map(({ id, uaWord, enWord }) => (
        <li key={id}>
          <p>Ukrainian Word: {uaWord}</p>
          <p>English Word: {enWord}</p>
          <button className={css.wordtListBtn} onClick={()=> deleteWord (id) }>Delete</button>
        </li>
      ))}
    </ul>
  );
};
