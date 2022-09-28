import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
// import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      setCustomAlert('Light Mode has been Enabled', 'success');
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor='#0e0c25';
      setCustomAlert('Dark Mode has been Enabled', 'success');
    }
  }

  const [alert,setAlert]=useState(null);

  const setCustomAlert=(message, type)=>
  {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  return (
    <>
      <Navbar title="TxtReDefine" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container">
      <Textform heading="Enter the Txt To ReDefine" mode={mode} setCustomAlert={setCustomAlert}/>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Textform heading="Enter the Txt To ReDefine" mode={mode} setCustomAlert={setCustomAlert}/>}>
        </Route>
        <Route path="/about" element={<About/>}>
        </Route>
      </Routes>
    </BrowserRouter>
         */}
      </div>
      {/* <div className="container"> */}
        
      {/* </div> */}
       
    </>
  );
}

export default App;
