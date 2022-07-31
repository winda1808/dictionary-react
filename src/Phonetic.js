import React from 'react';
import './Dictionary.css';


export default function Phonetic(props) {
    return(
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            <span className="Listen">
          <button type="submit" className="btn Listen-btn">
          <i class="fa-solid fa-volume-high"></i>
          </button>
        </span>
            </a>
            <span className="Text">
            {props.phonetic.text}
            </span>
        </div>
    );
}