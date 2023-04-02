import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const VoteButtons = ({ itemId }) => {
    const [voteCount, setVoteCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleVote = async (voteType) => {
      try {
        const response = await axios.post(`https://placeholder-api.com/vote/${itemId}`, {
          voteType
        });
  
        if (response.data.success) {
          setVoteCount(response.data.voteCount);
          setErrorMessage('');
        } else {
          throw new Error(response.data.message || 'An error occurred while voting.');
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
  
    return (
      <div className="vote-buttons">
        <button onClick={() => handleVote('up')}>
        <FontAwesomeIcon icon={faThumbsUp}/>
        </button>
        <button onClick={() => handleVote('down')}>
        <FontAwesomeIcon icon={faThumbsDown}/>
        </button>
      <div>Vote count: {voteCount}</div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default VoteButtons;