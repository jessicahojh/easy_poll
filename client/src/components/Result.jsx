import React from 'react';

const Result = ({ question, voteStats }) => {

  const questionTitle = question.question;
  const option1 = question.options[0].option;
  const option1Id = question.options[0]._id;
  const option2 = question.options[1].option;
  const option2Id = question.options[1]._id;
  const questionId = question._id;

  let opt1Votes = 0;
  let opt2Votes = 0;

  for (let i = 0; i < voteStats.length; i++) {
    if (voteStats[i].questionId === questionId && voteStats[i].optionId === option1Id){
      opt1Votes += 1;
    } else if (voteStats[i].questionId === questionId && voteStats[i].optionId === option2Id){
      opt2Votes += 1;
    }
  }

  let total = opt1Votes + opt2Votes;

  let opt1percentage = Math.round((opt1Votes/total) * 100);
  let opt2percentage = Math.round((opt2Votes/total) * 100);

    return (
      <div>
        <div className="text">
          <div className="result-title">{questionTitle}</div>
          <div>{option1}: <span>{opt1percentage}%</span></div>
          <div>{option2}: <span>{opt2percentage}%</span></div>
        </div>
      </div>
    )
}

export default Result;