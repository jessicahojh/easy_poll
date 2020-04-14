import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { addVote } from '../actions/voteActions';

const Poll = ({ question }) => {

  const dispatch = useDispatch();

  const questionTitle = question.question;
  const option1 = question.options[0].option;
  const option1Id = question.options[0]._id
  const option2 = question.options[1].option;
  const option2Id = question.options[0]._id
  
  const questionId = question._id;

  const user = useSelector((state) => state.users);

  // Need to know which option it is 
  function onClick1(e) {
    e.preventDefault();

    const userId = user.user._id;

    console.log("1 was clicked")

    dispatch(addVote(userId, option1Id))

  }

  function onClick2(e) {
    e.preventDefault();

    const userId = user.user._id;

    console.log("2 was clicked")

    dispatch(addVote(userId, option2Id))

  }

  return (
    <>
      <div>{questionTitle}</div>
      <button type="button" name="button1" value={option1Id} onClick={onClick1}>{option1}</button>
      <button type="button" name="button2" value={option2Id} onClick={onClick2}>{option2}</button>
    </>
  )


  // const state = {
  //   labels: [option1, option2],
  //   datasets: [
  //     {
  //       label: 'Rainfall',
  //       backgroundColor: [
  //         '#2FDE00',
  //         '#00A6B4',
  //         '#6800B4'
  //       ],
  //       hoverBackgroundColor: [
  //       '#175000',
  //       '#003350',
  //       '#35014F'
  //       ],
  //       data: [40, 60]
  //     }
  //   ]
  // }

  //   return (
  //       <div>
            
  //           <Doughnut
  //               data={state}
  //               options={{
  //                   title:{
  //                   display:true,
  //                   text: questionTitle,
  //                   fontSize:50
  //                   },
  //                   legend:{
  //                   display:true,
  //                   position:'right'
  //                   }
  //               }}
  //           />
            
  //       </div>
  //   )
}

export default Poll;
