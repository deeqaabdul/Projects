import React from 'react';
import './App.css'; 
import SynonymInput from './components/SynonymInput';
import SynonymList from './components/SynonymList';

function App() {
  return (
    <div className="container">
      <h1>Word Wizard</h1>
      <SynonymInput />
      <SynonymList synonyms={['example', 'sample', 'illustration']} /> {/* Example list of synonyms */}
    </div>
  );
}

export default App;

