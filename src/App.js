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
            <Question question={this.state.current.question} onNext={this.handleNext.bind(this)}></Question>
         </div>
      )
   }

   handleNext(question) {
      let nextIndex = question.index + 1
      this.setState(previousState => {
         previousState.data[question.index] = question
         previousState.current = {
            index: nextIndex,
            question: previousState.data[nextIndex]
         }
      })
   }

   handlePrevious(question) {

   }
}

export default App;
