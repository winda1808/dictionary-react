import React from 'react';
import Meaning from './Meaning';
import './Dictionary.css';
import Phonetic from './Phonetic';


export default function Results(props) {
    if (props.results) {
    return (
        <div className="Results">
            <section>
            <h2 className="Word">{props.results.word}</h2>
            {props.results.phonetics.map(function (phonetic, index) {
                return( 
                    <div key={index} className="Phonetic">
                                <Phonetic phonetic={phonetic} />
                        </div>
                );
            })}
            </section>
            {props.results.meanings.map(function (meaning, index) {
                return( 
                <div key={index} className="Meaning-Section">
                <Meaning meaning={meaning}/>
                </div>
                );
            })}
        </div>
    );
} else {
    return null;
}
}
