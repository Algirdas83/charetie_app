
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import MainContext from './context/MainContext.js';

import Header from './components/Header.js';
import Alert from './components/Alerts/Alert.js';
import Main from './pages/Main/Main.js';
import NewStory from './pages/Storys/New.js';
import Register from './pages/Register/Register.js';
import Login from './pages/Login/Login.js';
import Logout from './pages/Logout/Logout.js';




function App() {

  const [alert, setAlert] = useState({

    message:'',
    status:''
  })
  const [refresh, setRefresh] = useState(false)
  const [userData, setUserData] = useState({})

  const contextValues = { alert, setAlert, userData, setUserData, setRefresh }

  useEffect (() => {
    axios.get('/api/users/auth-check/')
    .then( resp => 
      {
        setUserData(resp.data)
      })
    .catch(error => 
      {
          console.log(error);
       })
       
  },[refresh])
  
 
  return (
   
       <BrowserRouter>
       
        <MainContext.Provider  value={contextValues} >
        <Header/>
       <div className="container">
        <Alert/>
       <Routes>
          <Route path='/' element = {<Main/>}/>
          { userData.id &&   
          <>
            <Route path='story-new' element = {<NewStory/>}/> 
           <Route path='logout' element = {<Logout/>}/> 
          </>
          }
         
          <Route path='register' element = {<Register/>}/>
          <Route path='login' element = {<Login/>}/>
          
          

         
          
        </Routes>
       
        </div>
        </MainContext.Provider>
       </BrowserRouter>
      
   
  )
}

export default App;
