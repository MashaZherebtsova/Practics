import { useEffect, useState } from 'react';
import Header from './Header/Header';
import { WordForm } from './WordsForm/WordForm';
import { WordList } from './WordList/WordList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [words, setWords] = useState(JSON.parse(localStorage.getItem('words')) ?? '');
  const [filter, setFilter] = useState('');

  const addWord = word => {
    setWords(prevState => {
      return [...prevState, word];
    });
  };
  const handleDeleteWord = id => {
    setWords(prevState => {
      return prevState.filter(word => word.id !== id);
    });
  };
  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };
    
  const handleFilterWords = () => { 
    return words.filter(word => 
      word.enWord.toLowerCase().includes(filter.toLowerCase()) || word.uaWord.toLowerCase().includes(filter.toLowerCase())
     
    )
  }
  
  useEffect(()=> {
    console.log('words useEffect ')
    localStorage.setItem('words', JSON.stringify(words));
  }, [words])
 
  return (
    <div>
      <Header />
      <WordForm addWord={addWord} />
      <Filter value={filter} handleChange={handleChangeFilter} />
      <WordList
        words={handleFilterWords()}
        deleteWord={handleDeleteWord}
        
       
      />
    </div>
  );
};
