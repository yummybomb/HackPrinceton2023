import React, {useState, useCallback, useRef} from 'react';
import treeNFT from './assets/treeNFT.png';
import './assets/RewardsPage.css';
import NavBar from './NavBar';
import axios from 'axios';

const RewardsPage = () => {
  const [data, setData] = useState([]);
  const [address, setAddress] = useState('');
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  }

  const quickMint = useCallback(async () => {
      //stop sending when there is a request
      if (isSending) return;

      setIsSending(true);

      
      await axios.post("http://localhost:8000/quick-mint", address).then((output) => {
      console.log(output.data);
      setData(output.data);}).catch((error) => {
          console.log(error);
      });

      if (isMounted.current) 
      setIsSending(false)
  }, [isSending])

  return (
    <div>
        <NavBar/>
        <div className = "nft">
            <img src={treeNFT}/>
        </div>
        <div className="center"> 
            <input className = "wallet" type="text" placeholder= "Blockchain Wallet Address" value={address} onChange={handleAddressChange}></input>
            <button className ="mint-button" onClick={quickMint}>Mint!</button>
        </div>
    </div>
  )
}

export default RewardsPage