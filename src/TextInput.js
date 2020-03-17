import React from 'react';

function TextInput (props) {
    let styleObj;
    if (props.styleOption !== 'bold') {
        styleObj = {
            fontStyle: props.styleOption,
            color: props.color
        }
    } else {
        styleObj = {
            fontWeight: props.styleOption,
            color: props.color
        }
    }
    return(
        <div id='text-container'>
            <h1>Type Text Here:</h1>
            <textarea id='text-area' onChange={props.handleChange} style={styleObj}/>
            <h3>Text Appears Here:</h3>
            <div id='text-copy'>
                <p style={styleObj} > {props.textInput} </p>
            </div>
        </div>
    )
}

export default TextInput