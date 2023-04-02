import React, {useState} from 'react'
import NavBar from './NavBar';

const UploadPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const changeHandler = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    const handleImageUpload = () => {
        // Upload logic goes here
        console.log(selectedImage);
      };

  return (
    <div>
        <NavBar/>
        <input type="file" onChange={changeHandler} />
        <button onClick={handleImageUpload}>Upload Image</button>
    </div>
    )
}

export default UploadPage;