import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const QuestionForm = () => {

    const [ question, setQuestion ] = useState('');
    const [ option1, setOption1 ] = useState('');
    const [ option2, setOption2 ] = useState('');

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
      e.preventDefault();
  
      dispatch(addQuestion(question))
      dispatch(addOption1(option1))
      dispatch(addOption2(option2))
  
      // Clear Fields
      setQuestion('');
      setOption1('');
      setOption2('');
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
                value={option1}
                onChange={e => setOption1(e.target.value)}
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
                value={option2}
                onChange={e => setOption2(e.target.value)}
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