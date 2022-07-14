
import "./App.css";
import React , {useState} from "react";

import Nav from "./Components/Nav.js";
import Alert from "./Components/Alert.js";
import TextForm from "./Components/TextForm";
// import About from "./Components/About.js";

// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // Function for Dark Mode Extension via NavBar .
  const [mode,setMode] = useState('dark');
  const [style, setStyle] = useState({
    color: "#211522",
    backgroundColor: "white"
  });

  function modeChanger(){
    if (style.color === "white"){
      setStyle({
        color : "#211522",
        backgroundColor: "white"
      })
      setMode('dark');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Activated !!","Success");
    }
    else{
      setStyle({
        color: "white",
        backgroundColor: "#211522"
      });
      setMode('light');
      document.body.style.backgroundColor = "#211522";
      showAlert("Dark Mode Activated !!", "Success");

    }
  }

  return (
    <>
      {/* <Router> */}
      <Nav toggleMode={modeChanger} mainStyle={style} mainMode={mode} title={"TextUtils"} start={"About"}/>
      <Alert alert={alert} mainStyle={style} mainMode={mode}/>
      <TextForm mainStyle={style} mainMode={mode} showAlertFnc={showAlert} head={"Enter Analyzing Text Below : "}/>
      {/* <About /> */}


      {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact 
            path="/"
            element={
              <TextForm
                showAlertFnc={showAlert}
                head={"Enter Analyzing Text Below : "}
              />
            }
          />
        </Routes> */}
      {/* </Router> */}


    </>
  );
}

export default App;
