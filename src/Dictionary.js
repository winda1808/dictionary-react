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
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} placeholder="What words do you want to look up?" size={50}/>
            </form>
            <Results results={results} />
        </div>
    )
}