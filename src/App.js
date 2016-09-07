import React, { Component } from 'react';
import Question from './pages/Question'
import { QuestionNavigation } from './components'

import Data from './data.json'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
   constructor(props) {
      super(props)
      this.handleNext = this.handleNext.bind(this)
      this.handlePrevious = this.handlePrevious.bind(this)
      this.state = {
         questions: Data.map((question, index) => ({ ...question, index, answer: '' })),
         indexCurrent: 0
      }
   }

   render() {
      const { questions, indexCurrent } = this.state
      return (
         <div className="App">
            <Question question={questions[indexCurrent]}/>
            <QuestionNavigation
               onNext={this.handleNext}
               onPrevious={this.handlePrevious}
               question={questions[indexCurrent]}/>
         </div>
      )
   }

   handleNext(question) {
      // if (!question.answer) {
      //    console.log('question not answered yet, cannot proceed')
      //    return ;
      // }
      const { questions } = this.state

      if (question.index < questions.length - 1) {
         this.setState({
            indexCurrent: question.index + 1
         })
      } else {
         console.log('current index is ' + question.index + ' which indicates it is the last' +
            ' question, no state reset happens')
      }
   }

   handlePrevious(question) {
      if (question.index > 0) {
         this.setState({
            indexCurrent: question.index - 1
         })
      } else {
         console.log('current index is 0 which indicates it is the first question, no state reset happens')
      }
   }
}

export default App
