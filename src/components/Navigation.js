import React, { Component } from 'react'

class Navigation extends Component {

   render() {
      const { index, total } = this.props
      return (
         <ul className="pager">
            { this.showPrevious(index) ? this.onPrevious(index) : null }
            { this.showSubmit(index, total) ? this.onNext(index) : null }
         </ul>
      )
   }

   onPrevious(index) {
      const { onPrevious } = this.props
      return (
         <li className="previous"><a
            onClick={() => onPrevious(index)}><span aria-hidden="true">&larr;</span>上一题
         </a></li>
      )
   }

   onNext(index) {
      const { onNext } = this.props
      return (
         <li className="next">
            <a
               onClick={() => onNext(index)}>提交<span aria-hidden="true">&rarr;</span>
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