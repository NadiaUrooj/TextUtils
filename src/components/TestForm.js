import React, { useState } from "react";

export default function TestForm(props) {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("ext cleared", "success");
  };

  const handleReverse = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Text reversed", "success");
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        props.showAlert("Copied to clipboard", "success");
      })
      .catch(() => {
        alert("Failed to copy text to clipboard.");
      });
  };

  const handleTextToSpeech = () => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverse}>
          Reverse text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleTextToSpeech}>
          Text to Speech
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCopyToClipboard}
        >
          {copied ? "Copied" : "Copy"}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word.length > 0).length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * text.split(/\s+/).filter((word) => word.length > 0).length}{" "}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
