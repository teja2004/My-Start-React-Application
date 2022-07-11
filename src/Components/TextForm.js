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

  function clearText() {
    setText("");
  }

  const handleSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  }

  function handleChange(event) {
    setText(event.target.value);
  }


  const [modeText, setModeText] = useState('dark')
  const [myStyle, setMyStyle] = useState({
    color: "#000000",
    backgroundColor: "white",
  })


  function modeChanger(){
    if (myStyle.color === '#000000')
    {
        setMyStyle({
          color: "white",
          backgroundColor: "#000000",
        });
        setModeText('light')
    }
    else
    {
        setMyStyle({
          color: "#000000",
          backgroundColor: "white",
        });
        setModeText('dark')
    }
  }

  return (
    <>
      <div className="container my-4 pt-3" style={myStyle}>
        <div className="mb-3">
          <div className="mx-3 my-3">
            <h2 className="mb-3">
              {props.head}{" "}
              <button
                type="button"
                className={`mx-5 mt-2 border-2 btn btn-outline-${modeText} text-${setModeText}`}
                onClick={modeChanger}
              >
                {modeText} Mode
              </button>
            </h2>
          </div>
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
          <button
            type="button"
            className="btn btn-success mx-1"
            onClick={handleSpaces}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-danger mx-4" onClick={clearText}>
            Clear Everything
          </button>
        </div>
        <div className="my-4">
          <h2>Text Summary : </h2>
          <p>
            {text === "" ? 0 : text.split(" ").length} Words , {text.length}{" "}
            Characters
          </p>
          <p>
            Minutes To Read {"Approx"} : {text === "" ? 0 : 0.08 * text.split(' ').length}{" "}
            Seconds.
          </p>
        </div>
        <div className="my-4 pb-3">
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
