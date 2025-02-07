import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Texter from './components/Texter';
import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";



function App() {

  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null)
        },2000);
  }

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#2e3e4f';
    showAlert('dark mode enabled','success')
    document.title='SharkNail-dark mode enabled'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert('light mode enabled','success')
    document.title='SharkNail-light mode enabled'

  }
}

  return (
    <>
    <div>
    <Router>
    <div className="navab">
    <Navbar title="sharkBite" about="About" mode={mode} toggleMode={toggleMode}/>
    </div>
    <Alert alert={alert}/>
    <Routes>
          <Route exact path="/" element={<Texter head="Amruth's work space" mode={mode}/>}/>    
          <Route exact path="/about" element={<About mode={mode}/>}/>       
    </Routes>
    </Router>

    </div>

</>
  );
}

export default App;



