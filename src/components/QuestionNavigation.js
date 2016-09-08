import React, { Component } from 'react'

class QuestionNavigation extends Component {
   constructor(props) {
      super(props)
      this.onPrevious = this.props.onPrevious.bind(this)
      this.onNext = this.props.onNext.bind(this)
      this.showPrevious = this.props.showPrevious.bind(this)
      this.showSubmit = this.props.showSubmit.bind(this)
   }

   render() {
      const { showSubmit, showPrevious } = this.props
      return (
         <div className="question-navigation">
            { showPrevious() ? this.renderPrevious() : null }
            { showSubmit() ? this.renderNext('提交') : this.renderNext('下一题') }
         </div>
      )
   }

   renderPrevious() {
      const { onPrevious, question } = this.props
      return (
         <button type="button" className="previous-question-button btn btn-cancel"
                 onClick={() => onPrevious(question)}>上一题
         </button>
      )
   }

   renderNext(text) {
      const { onNext, question }  = this.props
      return (
         <button type="button" className="next-question-button btn btn-primary"
                 onClick={() => onNext(question)}>{text}
         </button>
      )
   }

}

export default QuestionNavigation