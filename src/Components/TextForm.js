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

  function handleChange(event) {
    setText(event.target.value);
  }

  const [modeText, setModeText] = useState("dark");
  const [myStyle, setMyStyle] = useState({
    color: "#211522",
    backgroundColor: "white",
  });

  function modeChanger() {
    if (myStyle.color === "rgb(4 4 56)") {
      setMyStyle({
        color: "white",
        backgroundColor: "rgb(14 ,14, 0)",
      });
      setModeText("light");
      document.body.style.backgroundColor = "rgb(14 ,14, 0)";
    } else {
      setMyStyle({
        color: "rgb(4 4 56)",
        backgroundColor: "white",
      });
      setModeText("dark");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      {/* <Nav title={"TextUtils"} start={"Start"}/> */}
      <div className="form-check form-switch mx-4 my-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          onChange={modeChanger}
        />
        <label
          className={`form-check-label text-${
            modeText === "dark" ? "dark" : "light"
          }`}
          htmlFor="flexSwitchCheckChecked"
        >
          {modeText === "dark" ? "Light" : "Dark"} Mode
        </label>
      </div>
      
      <div className="container my-4 pt-3" style={myStyle}>
        <div className="mb-3">
          <div className="mx-3 my-3">
            {/* {modeText} Mode */}
            <h2 className="mb-3">{props.head} </h2>
          </div>
          <textarea
            className={`form-control bg-${
              modeText === "dark" ? "light" : "dark"
            } text-${modeText === "dark" ? "dark" : "light"}`}
            value={text}
            onChange={handleChange}
            id="textArea"
            rows="10"
          ></textarea>
        </div>
        <div className="flex container column">
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
            className="btn btn-success mx-1 my-3"
            onClick={handleSpaces}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-danger mx-1 my-3" onClick={clearText}>
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
            Minutes To Read {"Approx"} :{" "}
            {text === "" ? 0 : 0.08 * text.split(" ").length} Seconds.
          </p>
        </div>
        <div className="my-4 pb-3">
          <h3>Preview : </h3>
          <p>
            <i>{text}</i>
          </p>
        </div>
      </div>
      {/* <Footer  /> */}
    </>
  );
}

export default TextForm;
