import React, {Component} from 'react'

class QuestionNavigation extends Component {
    constructor(props) {
        super(props)
        this.onPrevious = this.props.onPrevious.bind(this)
        this.onNext = this.props.onNext.bind(this)
        this.showPrevious = this.props.showPrevious.bind(this)
        this.showSubmit = this.props.showSubmit.bind(this)
    }

    render() {
        const {showSubmit, showPrevious} = this.props
        return (
            <ul className="pager">
                { showPrevious() ? this.renderPrevious() : null }
                { showSubmit() ? this.renderNext('提交') : this.renderNext('下一题') }
            </ul>
        )
    }

    renderPrevious() {
        const {onPrevious, question} = this.props
        return (
            <li className="previous"><a
                   onClick={() => onPrevious(question)}><span aria-hidden="true">&larr;</span>上一题
            </a></li>
        )
    }

    renderNext(text) {
        const {onNext, question}  = this.props
        return (
            <li className="next">
                <a
                   onClick={() => onNext(question)}>{text}<span aria-hidden="true">&rarr;</span>
                </a>
            </li>
        )
    }

}

export default QuestionNavigation