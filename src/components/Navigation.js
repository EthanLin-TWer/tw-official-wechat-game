import React, { Component } from 'react'
import { Link } from 'react-router'

class Navigation extends Component {

   render() {
      const { index, total } = this.props
      return (
         <ul className="pager">
            { Navigation.showPrevious(index) ? this.renderPreviousButton(index) : null }
            { Navigation.showSubmit(index, total) ? this.renderSubmitButton() : this.renderNextButton() }
         </ul>
      )
   }

   renderPreviousButton(index) {
      const { onPrevious } = this.props
      return (
         <li className="previous"><a
            onClick={() => onPrevious(index)}>上一题
         </a></li>
      )
   }

   renderNextButton() {
      const { onNext } = this.props
      return (
         <li className="next">
            <a
               onClick={() => onNext()}>下一题
            </a>
         </li>
      )
   }

   renderSubmitButton() {
      const { onNext } = this.props
      return (
         <li className="next">
            <Link to="/result" onClick={() => onNext()}>提交</Link>
         </li>
      )
   }

   static showPrevious(index) {
      return index > 0
   }

   static showSubmit(index, total) {
      return index === total - 1
   }

}

export default Navigation