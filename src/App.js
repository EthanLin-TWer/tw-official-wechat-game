import React, { Component } from 'react';
import Question from './pages/Question'
import Questions from './data.json'
import './App.css';

class App extends Component {
   componentWillMount() {
      this.props = {
         data: Questions.map((question, index) => {
            question.index = index
            question.answer = ''
            return question
         }),
         current: {
            index: 0,
            question: Questions[0]
         }
      }
   }

   render() {
      return (
         <div className="App">
            <Question question={this.props.current.question} onNext={this.handleNext.bind(this)}></Question>
         </div>
      )
   }

   handleNext(question) {
      console.log(question)
   }

   handlePrevious(question) {

   }
}

export default App;
