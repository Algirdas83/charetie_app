
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import Header from './components/Header.js';

import Main from './pages/Main/Main.js'
import NewStory from './pages/Storys/New.js'




function App() {
  return (
   
       <BrowserRouter>
        
       <div className="container">
       <Routes>
          <Route path='/' element = {<Main/>}/>
          <Route path='/story-new' element = {<NewStory/>}/>
         
          
        </Routes>
        </div>
       </BrowserRouter>
      
   
  )
}

export default App;
