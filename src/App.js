import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import PostView from './PostView/PostView';
import LandingPage from './LandingPage/Landing_page';
import PostForm from './PostForm/PostForm';
// import ABC from './Context/userContext';

function App() {
  // const [Information,setInformation]=useState([])
  // console.log(Information);
  return (
    <div className="wrapper">

        
          <Routes>
              <Route path='/' element={<LandingPage/>} />
              <Route path='/Postview'  element={<PostView/>}/>
              <Route path='/PostForm'  element={<PostForm/>}/>
          </Routes>
        
     
    </div>
  );
}


export default App;
