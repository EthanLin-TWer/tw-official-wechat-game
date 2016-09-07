import React, { Component } from 'react'

class Question extends Component {

   onNext() {
      this.props.onNext(this.props.question)
   }

   onPrevious() {
      this.props.onPrevious(this.props.question)
   }

   onSelect(event) {
      this.props.question.answer = event.target.value
   }

   render() {
      console.log('question component render')
      console.log(this.props.question)
      return (
         <div className="question-panel">
            <div className="question">{ this.props.question.question }</div>
            <div className="question-image">{ this.props.question.images }</div>
            <div className="options">{
               this.props.question.options.map((option, index) => {
                  return (
                     <div className="option" key={index}>
                        <input id={ `option${index}` } type="radio" value={option} name="option"
                               onChange={this.onSelect.bind(this)} />
                        <label htmlFor={ `option${index}` }>{option}</label>
                     </div>
                  )
               })
            }</div>
            <div className="question-navigation">
               <button type="button" className="previous-question-button btn btn-cancel btn-lg" onClick={this.onPrevious.bind(this)}>上一题</button>
               <button type="button" className="next-question-button btn btn-primary btn-lg" onClick={this.onNext.bind(this)}>下一题</button>
            </div>
         </div>
      )
   }
}

export default Question