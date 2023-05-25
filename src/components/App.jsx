import { useState } from "react";
import Header from "./Header/Header";
import { WordForm } from "./WordsForm/WordForm";
import { WordList } from "./WordList/WordList";

export const App = () => {
const [words, setWords] = useState ([]);

const addWord = (word) => {
  setWords((prevState)=> { 
    return (
      [...prevState, word]
    )

  })
};

  return (
    <div>
      <Header/>
      <WordForm addWord = {addWord}/>
      <WordList words={words}/>
    </div>
  );
};
