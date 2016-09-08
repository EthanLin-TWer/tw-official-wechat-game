import React, { Component } from 'react';
import Question from './pages/Question'
import { QuestionNavigation, Header, Footer } from './components'

import Data from './data.json'
import './App.styl'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
   constructor(props) {
      super(props)
      this.handleNext = this.handleNext.bind(this)
      this.handlePrevious = this.handlePrevious.bind(this)
      this.showSubmit = this.showSubmit.bind(this)
      this.showPrevious = this.showPrevious.bind(this)
      this.state = {
         questions: Data.map((question, index) => ({ ...question, index, answer: '' })),
         indexCurrent: 0
      }
   }

   render() {
      const { questions, indexCurrent } = this.state
      return (
         <div className="App">
            <Header />
            <Question question={questions[indexCurrent]}/>
            <QuestionNavigation question={questions[indexCurrent]}
               onNext={this.handleNext} onPrevious={this.handlePrevious}
               showSubmit={this.showSubmit} showPrevious={this.showPrevious}
            />
            <Footer />
         </div>
      )
   }

   showSubmit() {
      const { indexCurrent, questions } = this.state
      return indexCurrent === questions.length - 1
   }

   showPrevious() {
      return this.state.indexCurrent > 0
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
