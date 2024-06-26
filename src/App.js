import "./App.css"
import React, { useState } from 'react'

import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from './components/Alert';

//React router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  //Setup for darkmode
  const [Mode, setMode] = useState('light');

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light mode";
    }
  };


  // Dismisable Alert Messages
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
            <div className="container my-3">
                <Routes>
                    <Route exact path='/' element={
                        <Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={Mode} />
                     }/> 
                     <Route exact path='/aboutUs' element={ 
                         <About mode={Mode} /> 
                     }/> 
                 </Routes> 
            </div>
        </Router>
    </>
);
}

export default App;