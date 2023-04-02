import React, {useState, useCallback, useRef} from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import './assets/ActivityGenerator.css';

const ActivityGeneratePage = () => {
    const [data, setData] = useState([]);
    const [isSending, setIsSending] = useState(false);
    const isMounted = useRef(true);

    

    const getActivity = useCallback(async () => {
        //stop sending when there is a request
        if (isSending) return;

        setIsSending(true);
        
        await axios.get("http://localhost:8000/get-activity").then((output) => {console.log(output.data);
        setData(output.data);}).catch((error) => {
            console.log(error);
        });

        if (isMounted.current) // only update if we are still mounted
        setIsSending(false)
    }, [isSending])
    


    return (
        <div>
            <NavBar/>
            <div class = "container1">
                <button class = "generateButton" onClick={getActivity}>Generate Activity!</button>
            </div>
            <div class = "container">
                <h2>{data.Activity}</h2>
                <p>{data.Description}</p> 
            </div>
        </div>
        
    
    );
}

export default ActivityGeneratePage;