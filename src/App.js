import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { Routes, Route} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const toggleMode = () =>{
      if(mode === 'dark'){
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been activated", "success");
        document.title = "WordPlay -Light Mode";
        // setInterval(() => {
        //   document.title = "WordPlay - Worplay is doing Great"
        // }, 2000);
        // setInterval(() => {
        //   document.title = "WordPlay - Nothing is better than WordPlay"
        // }, 1500);
      }
      else{
        setMode('dark');
        document.body.style.backgroundColor = '#4C4C4C';
        showAlert("Dark mode has been activated", "success");
        document.title = "WordPlay - Dark Mode";
      }
    }


    const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }


  return (
    <> 
        <Navbar title = "WordPlay" aboutText = "About WordPlay" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3" >
            <TextForm heading = "Enter the Text to analyze" mode = {mode} showAlert={showAlert}/>
        </div>
        {/* <About/> */}
    </>
  );
}

export default App;

