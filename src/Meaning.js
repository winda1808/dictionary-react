import React from 'react';



export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return( 
                <div key={index}>
                    <p>
                        {definition.definition}
                        {definition.example}
                        </p>
                      </div>  
                        
        );
    })}       
        
   
        </div>
    );
}


// <p>{props.meaning.definitions[0].definition}</p>
//<p>{props.meaning.definitions[0].example}</p>