import React from 'react'
import VoteButtons from './VoteButtons'
import NavBar from './NavBar'
import watering from './assets/watering.jpg';
import './assets/JudgingPage.css';

const UserJudgingPage = () => {
  return ( 
    
    <div>
        <NavBar/>
        <div className='water'>
          <img src={watering}/>
        </div>
        <VoteButtons/>

    </div>
  )
}

export default UserJudgingPage