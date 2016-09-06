import React, { Component } from 'react'

class Question extends Component {

   onNext() {
      this.props.onNext({
         id: this.props.question.id,
         index: this.props.question.index,
         answer: this.props.question.answer
      })
   }

   onSelect(event) {
      this.props.question.answer = event.target.value
   }

   render() {
      return (
         <div className="question-panel">
            <div className="question">{ this.props.question.question }</div>
            <div className="question-image">{ this.props.question.images }</div>
            <div className="options">
               {
                  this.props.question.options.map((option, index) => {
                     return (
                        <div className="option" key={index}>
                           <label htmlFor={ `option${index}` }>{option}</label>
                           <input id={ `option${index}` } type="radio" value={option} name="option" onChange={this.onSelect.bind(this)}/>
                        </div>
                     )
                  })
               }
            </div>
            <div className="question-navigation">
               <button type="button" className="previous-question-button">上一题</button>
               <button type="button" className="next-question-button" onClick={this.onNext.bind(this)}>下一题</button>
            </div>
         </div>
      )
   }
}

export default Question