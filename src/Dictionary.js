import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css';


export default function Dictionary() {
let [keyword, setKeyword] = useState(null);


    function handleResponse(response) {
        console.log(response.data[0]);
        
}
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }


    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

     function handleKeywordChange(event) {
        setKeyword(event.target.value);
     }

    return (
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
        </div>
    )
}