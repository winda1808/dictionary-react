import React, { useState } from 'react';
import Results from './Results';
import axios from 'axios';
import './Dictionary.css';


export default function Dictionary() {
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);


    function handleResponse(response) {
        setResults(response.data[0]);
        
}
    function search(event) {
        event.preventDefault();
        

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    }

     function handleKeywordChange(event) {
        setKeyword(event.target.value);
     }

    return (
        <div className="Dictionary">
            <section>
            <form onSubmit={search}>
                <input 
                type="search"
                autoFocus="on"
                className="form-control"
                onChange={handleKeywordChange} 
                placeholder="suggested words: cat, rose, halloween, pilot..." 
                size={50}
                />
        <span className="input-group-btn">
          <button type="submit" className="btn Search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </span>
            </form>
            </section>
            <Results results={results} />
        </div>
    )
}