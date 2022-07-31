import React, { useState } from 'react';
import Results from './Results';
import axios from 'axios';
import Photos from './Photos';
import './Dictionary.css';


export default function Dictionary() {
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);


function handleDictionResponse(response) {
    setResults(response.data[0]);
}

function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
}

    function search() {
        
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

    let pexelsKey = "563492ad6f917000010000016e886191bc3343458b464abb165eb1aa";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios.get(pexelsUrl, {headers: {Authorization: `Bearer ${pexelsKey}`}}).then(handlePexelsResponse);

    }

    function handleSubmit (event) {
        event.preventDefault();
        search ();
    }

     function handleKeywordChange(event) {
        setKeyword(event.target.value);
     }

     function load() {
        setLoaded(true);
        search();
     }


     if (loaded) {
    return (
        <div>
            <section className="Dictionary">
            <form onSubmit={handleSubmit}>
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
            <Photos photos={photos} />
        </div>
    )
} else {
    load ();
    return "Loading...";
}
}