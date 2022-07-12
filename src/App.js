// import logo from './logo.svg';
import "./App.css";
import Nav from "./Components/Nav.js";
import Alert from "./Components/Alert.js";
import TextForm from "./Components/TextForm";
import Footer from "./Components/Footer";
import React , {useState} from "react";

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
      <Nav title ={"TextUtils"} start={"Start"}/>
      <Alert alert={alert}/>
      <TextForm showAlertFnc={showAlert} head={"Enter Analyzing Text Below : "}/>
      <Footer/>
    </>
  );
}

export default App;
