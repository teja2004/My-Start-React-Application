import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  function changeToUpper() {
    let upperText = text.toUpperCase();
    setText(upperText);
    // console.log(`Changed Text : ${text} , To : ${upperText}`);
  }

  function changeToLower() {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  }

  function changeToCaptalize() {
    let lower = text.toLowerCase();
    let captial = lower.charAt(0).toUpperCase();
    setText(lower.replace(lower[0], captial));
  }

  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <>
      <div className="container my-4">
        <div className="mb-3">
          <h2 className="mb-3">{props.head}</h2>
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="textArea"
            rows="10"
          ></textarea>
        </div>
        <div className="flex">
          <button
            type="button"
            className="btn btn-success mx-1"
            onClick={changeToUpper}
          >
            Upper Case
          </button>
          <button
            type="button"
            className="btn btn-success mx-1"
            onClick={changeToLower}
          >
            Lower Case
          </button>
          <button
            type="button"
            className="btn btn-success mx-1"
            onClick={changeToCaptalize}
          >
            Captalize
          </button>
        </div>
        <div className="my-4">
          <h2>Text Summary : </h2>
          <p>
            {text === "" ? 0 : text.split(" ").length} Words , {text.length}{" "}
            Characters
          </p>
          <p>
            Minutes To Read {"Approx"} : {text === "" ? 0 : 0.08 * text.length}{" "}
            {"Seconds"}
          </p>
        </div>
        <div className="my-4">
          <h3>Preview : </h3>
          <p>
            <i>{text}</i>
          </p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
