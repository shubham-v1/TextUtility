import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (type,message) =>{
    setAlert({type:type,message:message});
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
 
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#212F3C ";
      showAlert("success","Dark mode has been enabled !");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "";
      showAlert("success","Light mode has been enabled !");
    }
  }
  return (
    <>
     <Navbar toggle={toggleMode} mode={mode} title="TextUtils" aboutText="About Us" home="Home"/>
     <Alert mode={mode} alert={alert}/>
     <TextForm textFormHeading="Enter text to use text Utilities" labelText="Enter text below" mode={mode} alert={alert} showAlert={showAlert}/>
     {/* <About aboutTitle="About Us" mode={mode}/> */}
    </>
  )
}

export default App;
