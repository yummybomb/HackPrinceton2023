import React from 'react';
import './assets/ImageScroll.css';
import Upload from './assets/Upload.png';
import Generation from './assets/Generation.png';
import Reputation from './assets/Reputation.png';

const ImageScroll = () => {
  return (
    <div class="media-scroller">

      <div class="media-element">
        <img src={Generation} class = "bd"/>
      </div>

      <div class="media-element">
        <img src={Upload} class = "bd"/>
      </div>

      <div class="media-element">
        <img src={Reputation} class = "bd"/>
      </div>

    </div>
  )
}

export default ImageScroll
