import React, { Component } from 'react'

class Question extends Component {
   constructor(props) {
      super(props)
      this.renderOption = this.renderOption.bind(this)
      this.onSelectOption = this.onSelectOption.bind(this)
      this.checked = this.checked.bind(this)
      this.state = { selected: props.question.userAnswer }
   }

   componentWillReceiveProps(nextProps) {
      this.setState({
         selected: nextProps.question.userAnswer
      })
   }

   render() {
      const { question } = this.props
      return (

         <div className="question-panel">
            <h4 className="question">{ question.question }</h4>
            <div className="question-image">{ question.images }</div>
            <div className="options">{
               question.options.map((option, index) => this.renderOption(option, index))
            }</div>
         </div>
      )
   }

   renderOption(option, index) {
      return (
         <label className="option" key={index} htmlFor={ `option${index}` }>
            <input id={ `option${index}` } type="radio" value={option} name="option"
                   onChange={this.onSelectOption} checked={this.checked(option)}/>
            <i><span className="option-text">{option}</span></i>
         </label>
      )
   }

   checked(option) {
      return option === this.state.selected
   }

   onSelectOption(event) {
      this.props.question.userAnswer = event.target.value
      this.setState({
         selected: event.target.value
      })
   }
}

export default Question