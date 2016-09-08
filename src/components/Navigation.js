import React, { Component } from 'react'

class Navigation extends Component {
   constructor(props) {
      super(props)
      this.onPrevious = this.props.onPrevious.bind(this)
      this.onNext = this.props.onNext.bind(this)
   }

   render() {
      const { index, total } = this.props
      return (
         <ul className="pager">
            { this.showPrevious(index) ? this.renderPrevious() : null }
            { this.showSubmit(index, total) ? this.renderNext('提交') : this.renderNext('下一题') }
         </ul>
      )
   }

   renderPrevious() {
      const { onPrevious, question } = this.props
      return (
         <li className="previous"><a
            onClick={() => onPrevious(question)}><span aria-hidden="true">&larr;</span>上一题
         </a></li>
      )
   }

   renderNext(text) {
      const { onNext, question }  = this.props
      return (
         <li className="next">
            <a
               onClick={() => onNext(question)}>{text}<span aria-hidden="true">&rarr;</span>
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