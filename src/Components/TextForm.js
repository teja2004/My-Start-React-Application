import React, { useState } from "react";
// import Nav from "./Nav.js";
// import Footer from "./Footer.js";

function TextForm(props) {
  const [text, setText] = useState("");
  function changeToUpper() {
    let upperText = text.toUpperCase();
    setText(upperText);
    // console.log(`Changed Text : ${text} , To : ${upperText}`);
    props.showAlertFnc("Changed to UpperCase!!", "Success");
  }

  function changeToLower() {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlertFnc("Changed to LowerCase!!","Success");
  }

  function changeToCaptalize() {
    let lower = text.toLowerCase();
    let captial = lower.charAt(0).toUpperCase();
    setText(lower.replace(lower[0], captial));
    props.showAlertFnc("Captalized!!", "Success");
  }

  function clearText() {
    setText("");
    props.showAlertFnc("Cleared Everything!!", "Warning");
  }

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlertFnc("Removed Extra Spaces!!", "Success");
  };

  const copyText = () =>{
    navigator.clipboard.writeText(text);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <div className="container pt-3" style={props.mainStyle}>
        <div className="mb-3">
          <div className="mx-3 my-3">
            <h2 className="mb-3">{props.head} </h2>
          </div>
          <textarea
            className={`form-control bg-${
              props.mainMode === "dark" ? "light" : "dark"
            } text-${props.mainMode === "dark" ? "dark" : "light"}`}
            value={text}
            onChange={handleChange}
            id="textArea"
            rows="5"
          ></textarea>
        </div>
        <div className="container column">
          <button
            type="button"
            className={`btn btn-${
              props.mainMode === "light" ? "danger" : "success"
            } mx-1 my-2`}
            disabled={text.length === 0 ? true : false}
            onClick={changeToUpper}
          >
            Upper Case
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mainMode === "light" ? "danger" : "success"
            } mx-1 my-2`}
            disabled={text.length === 0 ? true : false}
            onClick={changeToLower}
          >
            Lower Case
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mainMode === "light" ? "danger" : "success"
            } mx-1 my-2`}
            disabled={text.length === 0 ? true : false}
            onClick={changeToCaptalize}
          >
            Captalize
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mainMode === "light" ? "danger" : "success"
            } mx-1 my-2`}
            disabled={text.length === 0 ? true : false}
            onClick={handleSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mainMode === "light" ? "danger" : "success"
            } mx-1 my-2`}
            disabled={text.length === 0 ? true : false}
            onClick={copyText}
          >
            Copy Text
          </button>

          {/* Clear Everything */}
          <button
            className={`btn btn-${
              props.mainMode === "light" ? "success" : "danger"
            } mx-1 my-2`}
            disabled={text.length === 0 ? true : false}
            onClick={clearText}
          >
            Clear Everything
          </button>
        </div>

        <div className="my-4">
          <h2>Text Summary : </h2>
          <p>
            {text === ""
              ? 0
              : text.split(/\s/).filter((ele) => {
                  return ele.length !== 0;
                }).length}{" "}
            Words , {text.length} Characters
          </p>
          <p>
            Read {"{Approx}"} :{" "}
            {text === "" ? 0 : 0.008 * text.length} Seconds.
          </p>
        </div>
        <div className="my-4 pb-3">
          <h3>Preview : </h3>
          <div className="" style={{ fontFamily: "Consolas" }}>
            <textarea
              className={`w-100 form-control bg-${
                props.mainMode === "dark" ? "light" : "dark"
              } text-${props.mainMode === "dark" ? "dark" : "light"} border`}
              value={text}
              readOnly={true} 
              disabled = {text === '' ? true : false}
              id="textArea"
              rows="25"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextForm;
