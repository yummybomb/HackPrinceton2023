import React, {useState} from 'react';

const ActivityGeneratePage = () => {

    const [prompt, setPrompt] = useState('');

    const handleClick = () => {

    }

    return (
        <div>
            <button onClick = {handleClick}>Generate Activity!</button>
            <p>{prompt}</p>
        </div>
    
    );
}

export default ActivityGeneratePage;