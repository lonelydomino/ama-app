import React from 'react'
import { Button } from './Button'

import { Chart as defaults } from 'chart.js/auto'
import {Line} from 'react-chartjs-2'
import enviromentalData from '../data/environmentalData.json'
import './Chart.css'

defaults.responsive = true
const Chart = () => {
  return (
    <div className='chart-container'>
        <h1 className='chart-container-h1'>It's up to us to help the planet</h1>
        <div className="tempCard">
            <h1 className='chart-h1'> Global Rise in Average Temperatures</h1>
        <Line
          data={{
            labels: enviromentalData.map((data) => data.label),
            datasets: [
              {
                label: "Average rise in temperature (C)",
                data: enviromentalData.map((data) => data.temp),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              }
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0,
              },
            },
            plugins: {
              title: {
                text: "Rising temperatures"
              },
            },
          }}
        />
      </div>
      <p className='chart-desc'>Rising temperatures are a critical issue that requires immediate and sustained action. Global warming and climate change, driven primarily by human activities such as burning fossil fuels, deforestation, and industrial agriculture, are causing average global temperatures to rise at an unprecedented rate.</p>
      <br></br>
      <p className='chart-desc'> If left unchecked, this can lead to severe environmental, economic, and social consequences. Learn how to take action here:</p>
      <div className='hero-btns'>
         <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>Learn More
        </Button>
    </div> 
    </div>
  )
}

export default Chart