import React from 'react';

export default function Example(props) {
    if (props.example) {
    return (
    <div className="Example">
  Example: {props.example}
    </div>
    );
} else {
    return null;
}
}