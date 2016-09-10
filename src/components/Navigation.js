import React, { Component } from 'react'

class Navigation extends Component {

   render() {
      const { index, total } = this.props
      return (
         <ul className="pager">
            { this.showPrevious(index) ? this.renderPrevious(index) : null }
            { this.showSubmit(index, total) ? this.renderNext('提交')(index) : this.renderNext('下一题')(index) }
         </ul>
      )
   }

   renderPrevious(index) {
      const { onPrevious } = this.props
      return (
         <li className="previous"><a
            onClick={() => onPrevious(index)}><span aria-hidden="true">&larr;</span>上一题
         </a></li>
      )
   }

   renderNext(text) {
      const { onNext } = this.props
      return index => (
         <li className="next">
            <a
               onClick={() => onNext(index)}>{text}<span aria-hidden="true">&rarr;</span>
            </a>
         </li>
      )
   }

   showPrevious(index) {
      return index > 0
   }

   showSubmit(index, total) {
      return index === total - 1
   }

}

export default Navigation