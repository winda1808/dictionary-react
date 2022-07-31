import React from 'react';
import './Dictionary.css';
import Synonyms from './Synonyms';
import Example from './Example';



export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3 className="PartOfSpeech">{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return( 
                <div key={index}>
                    <p className="Definition">
                        {definition.definition}
                    </p>
                        <Example example={definition.example} />
                        <Synonyms synonyms={definition.synonyms}/>
                      </div>  
        );
    })}       
        
   
        </div>
    );
}


//<p>{props.meaning.definitions[0].definition}</p>
//<p>{props.meaning.definitions[0].example}</p>