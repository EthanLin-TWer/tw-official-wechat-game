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
      this.renderNext = this.renderNext.bind(this)
      this.state = {
         questions: this.loadQuestions(),
         indexCurrent: 0
      }
   }

   loadQuestions() {
      return Data.map((question, index) => ({ ...question, index, answer: '' }))
   }

   render() {
      const { questions, indexCurrent } = this.state
      return (
         <div className="App">
            <Header />
            <Question question={questions[indexCurrent]} renderNext={this.renderNext}/>
            <Navigation index={this.state.indexCurrent} total={this.state.questions.length}
               onNext={this.handleNext} onPrevious={this.handlePrevious}
            />
            <Footer />
         </div>
      )
   }

   renderNext(userAnswer) {
      const { questions, indexCurrent } = this.state
      questions[indexCurrent].userAnswer = userAnswer

      if (indexCurrent < questions.length - 1) {
         this.setState({ indexCurrent: indexCurrent + 1})
      }
   }

   handleNext(current) {
      const { questions } = this.state

      if (current < questions.length - 1) {
         this.setState({
            indexCurrent: current + 1
         })
      }
   }

   handlePrevious(current) {
      if (current > 0) {
         this.setState({
            indexCurrent: current - 1
         })
      }
   }
}

export default App
