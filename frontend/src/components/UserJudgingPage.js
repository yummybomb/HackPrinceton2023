import React from 'react'
import VoteButtons from './VoteButtons'
import NavBar from './NavBar'
import watering from './assets/watering.jpg';

const UserJudgingPage = () => {
  return ( 
    
    <div>
        <NavBar/>
        <VoteButtons/>
        <div className='water'>
          <img src={watering}/>
        </div>
    </div>
  )
}

export default UserJudgingPage