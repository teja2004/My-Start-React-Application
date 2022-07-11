// import logo from './logo.svg';
import "./App.css";
import Nav from "./Components/Nav.js";
import TextForm from "./Components/TextForm";
import Footer from "./Components/Footer";

// let a = 100;
function App() {
  return (
    <>
      <Nav title ={"TextUtils"} start={"Start"}/>
      <TextForm head={"Enter Analyzing Text Below : "}/>
      <hr/>
      <Footer/>
    </>
  );
}

export default App;
