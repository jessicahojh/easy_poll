import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const state = {
    labels: ['Pho', 'Ramen'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [40, 60]
      }
    ]
  }

const Poll = () => {

    return (
        <div>
            
            <Doughnut
                data={state}
                options={{
                    title:{
                    display:true,
                    text:'Which do you prefer?',
                    fontSize:50
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
            />
            
        </div>
    )
}

export default Poll;
