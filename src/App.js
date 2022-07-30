import React from 'react';
import './App.css';
import hello from "./hello.png";
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={hello} alt="placeholder" className="Image img-fluid"/>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="footer">
        open source code by Winda Andhini
      </footer>
    </div>
    </div>
  );
}
