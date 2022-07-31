import React from 'react';
import './Dictionary.css';
import ReactAudioPlayer from 'react-audio-player';


export default function Phonetic(props) {


    function listen(event) {
        event.preventDefault();

    }
    return(
        <div className="Phonetic">
            <ReactAudioPlayer
            src={props.phonetic.audio}
            onPlay={listen}
            controls
            />
            <span className="Text">
            {props.phonetic.text}
            </span>
        </div>
    );
}