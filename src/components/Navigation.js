import React, { Component } from 'react'

class Navigation extends Component {

   render() {
      const { index, total } = this.props
      return (
         <ul className="pager">
            { Navigation.showPrevious(index) ? this.renderPreviousButton(index) : null }
            { Navigation.showSubmit(index, total) ? this.renderSubmitButton() : null }
         </ul>
      )
   }

   renderPreviousButton(index) {
      const { onPrevious } = this.props
      return (
         <li className="previous"><a
            onClick={() => onPrevious(index)}><span aria-hidden="true">&larr;</span>上一题
         </a></li>
      )
   }

   renderSubmitButton() {
      const { onSubmit } = this.props
      return (
         <li className="next">
            <a
               onClick={() => onSubmit()}>提交<span aria-hidden="true">&rarr;</span>
            </a>
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