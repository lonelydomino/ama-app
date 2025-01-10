import React from 'react'

import { Chart as defaults } from 'chart.js/auto'
import {Line} from 'react-chartjs-2'
import enviromentalData from '../data/environmentalData.json'
import './Chart.css'

defaults.responsive = true
const Chart = () => {
  return (
    <div className='chart-container'>
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

    </div>
  )
}

export default Chart