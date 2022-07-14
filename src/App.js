// import logo from './logo.svg';
import "./App.css";
import Nav from "./Components/Nav.js";
import Alert from "./Components/Alert.js";
import TextForm from "./Components/TextForm";
import About from "./Components/About.js";
import React , {useState} from "react";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// let a = 100;
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

  return (
    <>
      <Router>
        <Nav title={"TextUtils"} start={"About"} />
        <Alert alert={alert} />
        <Routes>
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
