import React from 'react';
import './App.css';
import title from "./title.png";
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={title} alt="placeholder" className="Image img-fluid"/>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="footer">
        <a href="https://github.com/winda1808/dictionary-react" className="RepositoryLink">
        Coded by Winda Andhini
        </a>
      </footer>
    </div>
    </div>
  );
}
