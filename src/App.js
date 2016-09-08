import React, { Component } from 'react';
import { Question } from './pages'
import { Navigation, Header, Footer } from './components'

import Data from './data/questions.json'
import './App.styl'
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
            <Header />
            <Question question={questions[indexCurrent]}/>
            <Navigation index={this.state.indexCurrent} total={this.state.questions.length}
               onNext={this.handleNext} onPrevious={this.handlePrevious}
            />
            <Footer />
         </div>
      )
   }

   handleNext(current) {
      const { questions } = this.state
      if (!questions[current].answer) {
         console.log('question not answered yet, cannot proceed')
         return ;
      }

      if (current < questions.length - 1) {
         this.setState({
            indexCurrent: current + 1
         })
      } else {
         console.log('current index is ' + current + ' which indicates it is the last' +
            ' question, no state reset happens')
      }
   }

   handlePrevious(current) {
      if (current > 0) {
         this.setState({
            indexCurrent: current - 1
         })
      } else {
         console.log('current index is 0 which indicates it is the first question, no state reset happens')
      }
   }
}

export default App
