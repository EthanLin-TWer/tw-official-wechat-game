import React from 'react'

const renderOption = (question, option, index) => (
   <div className="option" key={index}>
      <input id={ `option${index}` } type="radio" value={option} name="option"
             onChange={e => question.answer = e.target.value}/>
      <label htmlFor={ `option${index}` }>{option}</label>
   </div>
)

const Question = ({ question }) => (
   <div className="question-panel">
      <div className="question">{ question.question }</div>
      <div className="question-image">{ question.images }</div>
      <div className="options">{
         question.options.map((option, index) => renderOption(question, option, index))
      }</div>
   </div>
)

export default Question