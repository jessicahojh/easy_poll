import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const Poll = ({ question }) => {

  const option1 = question.options[0].option
  const option2 = question.options[1].option
  const questionTitle = question.question

  const state = {
    labels: [option1, option2],
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

    return (
        <div>
            
            <Doughnut
                data={state}
                options={{
                    title:{
                    display:true,
                    text: questionTitle,
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
