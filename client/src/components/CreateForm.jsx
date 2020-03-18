import React from 'react'
import Button from 'react-bootstrap/Button';

const CreateForm = ({
    question,
    option1,
    option2,
    handleQuestion,
    handleOption1,
    handleOption2,
    handleSubmit
}) => {
    return (

        <form onSubmit={handleSubmit}>

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
                onChange={handleQuestion}
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
                onChange={handleOption1}
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
                onChange={handleOption2}
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

export default CreateForm;