import React, { Component } from 'react'

class Question extends Component {
   constructor(props) {
      super(props)
      this.renderOption = this.renderOption.bind(this)
      this.onOptionSelected = this.onOptionSelected.bind(this)
      this.state = { userAnswer: props.question.userAnswer }
   }

   componentWillReceiveProps(nextProps) {
      this.setState({
         userAnswer: nextProps.question.userAnswer
      })
   }

   render() {
      const { question } = this.props
      return (

         <div className="question-panel">
            <h4 className="question-content">{ question.question }</h4>
            <div className="options">{
               question.options.map((option, index) => this.renderOption(option, index, question))
            }</div>
         </div>
      )
   }

   renderOption(option, index, question) {
      return (
         <div className="option-container">
            <label className="option" key={index} htmlFor={ `option${index}` }>
               <input id={ `option${index}` } type="radio" value={option} name="option"
                      onChange={this.onOptionSelected(question)}
                      checked={option === this.state.userAnswer}/>
               <b><span className="option-text">{option}</span></b>
            </label>
         </div>
      )
   }

   onOptionSelected(question) {
      return event => {
         const userAnswer = event.target.value
         question.userAnswer = userAnswer
         this.setState({ userAnswer })
      }
   }
}

export default Question