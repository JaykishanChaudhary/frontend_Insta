import React, { useEffect, useState } from 'react';
import logo from '../assets/img/icon.svg'
import './PostView.css'
import Post from '../Post/Post';
// import  {PostData}  from '../Data/PostData.jsx';
import Camera from '../assets/img/camera.png';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import ABC from '../Context/userContext';
import axios from 'axios';




export default  function  PostView() {
  const [Information,setInformation]=useState([]);
  
  
 
  function getData()
  {
    console.log("hi");
     axios.get("http://localhost:5000/getpost").then((response)=>{
      const callData=response.data.result;
      setInformation(callData);
      console.log(callData);
     }).catch(error => console.log(error));
  
  }

  useEffect(() => {
    console.log("hi");
    getData()
      
    },[]);

  return (
    <div>
    <div className='headbox'>
      <img src={logo} alt="" id='logoimg'/>
      <h1 className='instahead'>Instaclone</h1>
      <Link to={'/PostForm'}>
          <img src={Camera}  id='cameraimg' alt=''/>
      </Link>
    </div>
    <hr/>
    {Information.map((data,i) => {
    return  <Post data={data} key={i}/> 
      
    })}
    <div/>
  </div>
  )
}
