import React, {useState, useCallback, useRef} from 'react';
import axios from 'axios';

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
            <button onClick={getActivity}>Generate Activity!</button>
            <h2>{data.Activity}</h2>
            <p>{data.Description}</p>
        </div>
        
    
    );
}

export default ActivityGeneratePage;