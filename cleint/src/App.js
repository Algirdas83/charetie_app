
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useState, useEffect } from 'react';

import MainContext from './context/MainContext.js';

import Header from './components/Header.js';
import Alert from './components/Alerts/Alert.js';
import Main from './pages/Main/Main.js'
import NewStory from './pages/Storys/New.js'
import Donation from './pages/Donation/Donation.js';
import Login from './pages/Login/Login.js';




function App() {

  const [alert, setAlert] = useState({

    message:'',
    status:''

  })

  const contextValues = { alert, setAlert }


  return (
   
       <BrowserRouter>
        <Header/>
        <MainContext.Provider  value={contextValues} >
       <div className="container">
        <Alert/>
       <Routes>
          <Route path='/' element = {<Main/>}/>
          <Route path='story-new' element = {<NewStory/>}/>
          <Route path='donation/:id' element = {<Donation/>}/>
          <Route path='donation/:id' element = {<Donation/>}/>
          <Route path='login' element = {<Login/>}/>
          
          

         
          
        </Routes>
       
        </div>
        </MainContext.Provider>
       </BrowserRouter>
      
   
  )
}

export default App;
