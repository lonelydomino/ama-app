// PictureAndText.js
import React from 'react';
import './PictureAndText.css';
import Earth from './earth2.jpg'
import Chart from './Chart';

const PictureAndText = () => {
  return (
    <div className="picture-text-container">
      <div className="content">
        {/* <img 
          src={Earth}
          alt="Placeholder" 
          className="picture" 
        /> */}
        <Chart />
        <p>Rising temperatures are a critical issue that requires immediate and sustained action. Global warming and climate change, driven primarily by human activities such as burning fossil fuels, deforestation, and industrial agriculture, are causing average global temperatures to rise at an unprecedented rate.</p>
        <div className='hero-btns'>
      </div> 
      </div>
    </div>
  );
};

export default PictureAndText;

