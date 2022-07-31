import React from 'react';
import './Dictionary.css';

export default function Example(props) {
    if (props.example) {
    return (
    <div className="Example">
   <strong>Example: </strong> 
   <p>"{props.example}"</p>
    </div>
    );
} else {
    return null;
}
}