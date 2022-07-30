import React from 'react';
import './App.css';
import hello from "./hello.png"

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hello} alt="placeholder" className="img-fluid"/>
      </header>
    </div>
  );
}
