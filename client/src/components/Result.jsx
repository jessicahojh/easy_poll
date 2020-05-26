import React from 'react';

import questionMark from '../static/question.svg';
import check1 from '../static/check1.svg';
import check2 from '../static/check2.svg';

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
          <div className="result-title"><img src={questionMark} alt="questionMark" className='icon question-mark'/>{questionTitle}</div>
            <div className="result-options"><img src={check1} alt="check1" className='icon check'/><b>{option1}</b>: <span>{opt1percentage}%</span></div>
            <div className="result-options"><img src={check2} alt="check2" className='icon check'/><b>{option2}</b>: <span>{opt2percentage}%</span></div>
        </div>
      </div>
    )
}

export default Result;