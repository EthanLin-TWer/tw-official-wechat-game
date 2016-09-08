import React from 'react'

const QuestionNavigation = ({ onPrevious, onNext, question }) => (
   <div className="question-navigation">
      <button type="button" className="previous-question-button btn btn-cancel"
              onClick={() => onPrevious(question)}>上一题
      </button>
      <button type="button" className="next-question-button btn btn-primary"
              onClick={() => onNext(question)}>下一题
      </button>
   </div>
)

export default QuestionNavigation