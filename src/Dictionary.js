import React, { useState } from 'react';
import './Dictionary.css';


export default function Dictionary() {
let [keyword, setKeyword] = useState(null);
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

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