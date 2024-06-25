import React, { useState } from 'react'

export default function Textform(props) {
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
        setPText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText);
        setPText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
        setPText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const clearText = () => {
        setText("");
        setPText("Nothing to preview!!");
        props.showAlert("Text Cleared!", "success");
    }


    // *********** Challenge *********************
    // Copy to Clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text).then(() => {
            // alert('Text copied to clipboard!');
            props.showAlert("Text copied", "success");
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            props.showAlert("Text cannot be copied", "danger");
        });
    };

    //Remove Extra Space
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    // Listen Now
    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        }
        props.showAlert("Dictating text...", "success");
    };


    // Stop Listen
    const handleStopSpeak = () => {
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
            props.showAlert("Dictating text stopped...", "danger");
        }
    };


    const [text, setText] = useState("");
    const [Ptext, setPText] = useState("Nothing to preview!!");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    const wordCount = text.trim().split(/\s+/).filter((word) => word.length > 0).length;
    return (
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="container" >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{backgroundColor: props.mode==='dark'? '#042743': 'white', color:props.mode=== 'dark'?'white': 'black'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={copyToClipboard}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button className="btn btn-success mx-2" onClick={handleSpeak}>Listen Now</button>
                <button className="btn btn-danger mx-2" onClick={handleStopSpeak}>Stop Listen</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{wordCount} words and {text.length} characters</p>

                <p>{wordCount > 0 ? 0.008 * wordCount : 0} Minutes read</p>
                <h2>Preview</h2>
                <p>{Ptext.length==0? "Nothing to preview!!" : Ptext}</p>
            </div>
        </div>
    )
}

