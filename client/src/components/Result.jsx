import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';

const Result = ({ question, voteStats }) => {

  const questionTitle = question.question;
  const option1 = question.options[0].option;
  const option1Id = question.options[0]._id
  const option2 = question.options[1].option;
  const option2Id = question.options[1]._id
  const questionId = question._id;

  let opt1Votes = 0
  let opt2Votes = 0

  for (let i = 0; i < voteStats.length; i++) {
    if (voteStats[i].questionId === questionId && voteStats[i].optionId === option1Id){
      opt1Votes += 1
    } else if (voteStats[i].questionId === questionId && voteStats[i].optionId === option2Id){
      opt2Votes += 1
    }
  }

  let total = opt1Votes + opt2Votes

  let opt1percentage = opt1Votes/total
  let opt2percentage = opt2Votes/total

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
        // data: [40, 60]
        data: [opt1percentage, opt2percentage]
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

export default Result;