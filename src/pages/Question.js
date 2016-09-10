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
      const { question, renderNext } = this.props
      return (

         <div className="question-panel">
            <h4 className="question">{ question.question }</h4>
            <div className="question-image">{ question.images }</div>
            <div className="options">{
               question.options.map((option, index) => this.renderOption(option, index, renderNext))
            }</div>
         </div>
      )
   }

   renderOption(option, index, renderNext) {
      return (
         <label className="option" key={index} htmlFor={ `option${index}` }>
            <input id={ `option${index}` } type="radio" value={option} name="option"
                   onChange={this.onOptionSelected(renderNext)}
                   checked={option === this.state.userAnswer}/>
            <i><span className="option-text">{option}</span></i>
         </label>
      )
   }

   onOptionSelected(renderNext) {
      return event => {
         const userAnswer = event.target.value
         this.setState({ userAnswer })
         renderNext(userAnswer)
      }
   }
}

export default Question