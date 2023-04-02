import React from 'react'
import treeNFT from './assets/treeNFT.png';
import './assets/RewardsPage.css';
import NavBar from './NavBar';

const RewardsPage = () => {
  return (
    <div>
        <NavBar></NavBar>
        <div class = "nft">
            <img src={treeNFT}/>
        </div>
        <div class="center">
            <button class="mint-button">Mint!</button>
        </div>
    </div>
  )
}

export default RewardsPage