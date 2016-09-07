import React, { Component } from 'react';
import Question from './pages/Question'
import Data from './data.json'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         questions: Data.map((question, index) => ({ ...question, index, answer: '' })),
         indexCurrent: 0
      }
   }

   render() {
      return (
         <div className="App">
            <Question question={this.state.questions[this.state.indexCurrent]}
                      onNext={this.handleNext.bind(this)}
                      onPrevious={this.handlePrevious.bind(this)}></Question>
         </div>
      )
   }

   handleNext(question) {
      // if (!question.answer) {
      //    console.log('question not answered yet, cannot proceed')
      //    return ;
      // }
      if (question.index < this.state.questions.length - 1) {
         this.setState(previousState => {
            previousState.questions[question.index] = question
            previousState.indexCurrent = question.index + 1
         })
      } else {
         console.log('current index is ' + question.index + ' which indicates it is the last' +
            ' question, no state reset happens')
      }
   }

   handlePrevious(question) {
      if (question.index > 0) {
         this.setState(previousState => {
            previousState.indexCurrent = question.index - 1
         })
      } else {
         console.log('current index is 0 which indicates it is the first question, no state reset happens')
      }
   }

}

export default App;
