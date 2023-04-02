import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

function VoteButtons() {
  const [count, setCount] = useState(0);
    return (
      <div className="vote-buttons">
        <button onClick={() => setCount(count + 1)}>
        <FontAwesomeIcon icon={faThumbsUp}/>
        </button>
        <button onClick={() => setCount(count - 1)}>
        <FontAwesomeIcon icon={faThumbsDown}/>
        </button>
      <div>Vote count: {count}</div>
    </div>
  );
};

export default VoteButtons;