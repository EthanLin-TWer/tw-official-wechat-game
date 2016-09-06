import React, { Component } from 'react';
import Question from './pages/Question'
import Questions from './data.json'
import './App.css';

class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         data: Questions.map((question, index) => {
            question.index = index
            question.answer = ''
            return question
         }),
         current: {
            index: 0,
            question: Questions[0]
         },
         total: Questions.length
      }
   }

   render() {
      return (
         <div className="App">
            <Question question={this.state.current.question}
                      onNext={this.handleNext.bind(this)} onPrevious={this.handlePrevious.bind(this)}></Question>
         </div>
      )
   }

   handleNext(question) {
      if (!question.answer) {
         console.log('question not answered yet, cannot proceed')
         return ;
      }
      if (question.index < this.state.total - 1) {
         let nextIndex = question.index + 1
         this.setState(previousState => {
            previousState.data[question.index] = question
            previousState.current = {
               index: nextIndex,
               question: previousState.data[nextIndex]
            }
         })
      } else {
         console.log('current index is ' + question.index + ' which indicates it is the last' +
            ' question, no state reset happens')
      }
   }

   handlePrevious(currentIndex) {
      if (currentIndex > 0) {
         this.setState(previousState => {
            previousState.current = {
               index: currentIndex - 1,
               question: previousState.data[(currentIndex - 1)]
            }
         })
      } else {
         console.log('current index is 0 which indicates it is the first question, no state reset happens')
      }
   }
}

export default App;
