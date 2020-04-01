import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addQuestion } from '../actions/questionActions';
import { addOption } from '../actions/optionActions';

const QuestionForm = () => {

    const user = useSelector((state) => state.users.user);

    const [ question, setQuestion ] = useState('');
    const [ optionA, setOptionA ] = useState('');
    const [ optionB, setOptionB ] = useState('');

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
      e.preventDefault();

      const newQuestion = {
        user,
        question,
        optionA,
        optionB,
      }

      const newOption1 = {
          option: optionA
      }

      const newOption2 = {
          option: optionB
      }

      dispatch(addQuestion(newQuestion))
      dispatch(addOption(newOption1))
      dispatch(addOption(newOption2))
  
      // Clear Fields
      setQuestion('');
      setOptionA('');
      setOptionB('');
    };

    return (

        <form onSubmit={onSubmit}>

        <div className="form-center">

            <div className="form-group">
            <label htmlFor="question">Question: </label>
            <input
                type="text"
                className="form-control"
                id="question"
                name="question"
                placeholder="e.g. Which do you prefer?"
                value={question}
                onChange={e => setQuestion(e.target.value)}
            />
            </div>

            <div className="form-group">
            <label htmlFor="option1">Option 1: </label>
            <input
                type="text"
                className="form-control"
                id="option1"
                name="option1"
                placeholder="e.g. Pho"
                value={optionA}
                onChange={e => setOptionA(e.target.value)}
            />
            </div>

            <div className="form-group">
            <label htmlFor="option2">Option 2: </label>
            <input
                type="text"
                className="form-control"
                id="option2"
                name="option2"
                placeholder="e.g. Ramen"
                value={optionB}
                onChange={e => setOptionB(e.target.value)}
            />
            </div>

        </div>

        <div className="center">
        <Button type="submit" className="btn">
            Create Poll!
        </Button>
        </div>

        </form>

    )
}

export default QuestionForm;