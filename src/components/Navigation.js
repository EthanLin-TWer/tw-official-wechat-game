import React, { Component } from 'react'

class Navigation extends Component {

   render() {
      const { index, total } = this.props
      return (
         <ul className="pager">
            { Navigation.showPrevious(index) ? this.renderPreviousButton(index) : null }
            { Navigation.showSubmit(index, total) ? this.renderNextButton('提交') : this.renderNextButton('下一题') }
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

   renderNextButton(text) {
      const { onNext } = this.props
      return (
         <li className="next">
            <a
               onClick={() => onNext()}>{text}<span aria-hidden="true">&rarr;</span>
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