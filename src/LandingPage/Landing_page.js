import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingImage from '../assets/img/lens-1418954@2x.png'
import './LandingPage.css'


export default function LandingPage() {

  
  return <div className='landingPage'>
    <div className='leftmost'></div>
    <div className='leftpart'>
    <img src={LandingImage} id='landingimg' width="330rem" height="500rem" alt='lens'/>
    </div>
    <div className='rightpart'>
    <div className='heading'>10x Team 04</div>
    <Link to='/PostView'>
    <button>Enter</button>
    </Link>
    </div>
    <div className='rightmost'></div>
    </div>;
}
