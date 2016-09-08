import React, { Component } from 'react'

class Question extends Component {
   constructor(props) {
      super(props)
      this.renderOption = this.renderOption.bind(this)
      this.onSelectOption = this.onSelectOption.bind(this)
      this.checked = this.checked.bind(this)
      this.state = { selected: props.question.answer }
   }

   componentWillReceiveProps(nextProps) {
      this.setState({
         selected: nextProps.question.answer
      })
   }

   render() {
      const { question } = this.props
      return (
         
         <div className="question-panel">
            <div className="question">{ question.question }</div>
            <div className="question-image">{ question.images }</div>
            <div className="options">{
               question.options.map((option, index) => this.renderOption(option, index))
            }</div>
         </div>
      )
   }

   renderOption(option, index) {
      return (
         <div className="option" key={index}>
            <input id={ `option${index}` } type="radio" value={option} name="option"
                   onChange={this.onSelectOption} checked={this.checked(option)}/>
            <label htmlFor={ `option${index}` }>{option}</label>
         </div>
      )
   }

   checked(option) {
      return option === this.state.selected
   }

   onSelectOption(event) {
      this.props.question.answer = event.target.value
      this.setState({
         selected: event.target.value
      })
   }
}

export default Question