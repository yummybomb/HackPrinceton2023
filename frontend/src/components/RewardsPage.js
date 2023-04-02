import React from 'react'
import treeNFT from './assets/treeNFT.png';
import './assets/RewardsPage.css';
import NavBar from './NavBar';

const RewardsPage = () => {
  return (
    <div>
        <NavBar/>
        <img src={treeNFT}/>
    </div>
  )
}

export default RewardsPage