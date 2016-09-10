import React, { Component } from 'react';
import { Question } from './pages'
import { Navigation, Header, Footer } from './components'

import Data from './data/questions.json'
import './App.styl'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
   constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
      this.renderPrevious = this.renderPrevious.bind(this)
      this.renderNext = this.renderNext.bind(this)
      this.state = {
         questions: App.loadQuestions(),
         indexCurrent: 0
      }
   }

   static loadQuestions() {
      return Data.map((question, index) => ({ ...question, index, answer: '' }))
   }

   render() {
      const { questions, indexCurrent } = this.state
      return (
         <div className="App">
            <Header />
            <Question question={questions[indexCurrent]} renderNext={this.renderNext}/>
            <Navigation index={this.state.indexCurrent} total={this.state.questions.length}
                        onSubmit={this.onSubmit} onPrevious={this.renderPrevious}
            />
            <Footer />
         </div>
      )
   }

   renderPrevious(current) {
      if (current <= 0) return ;

      this.setState({ indexCurrent: current - 1 })
   }

   renderNext(userAnswer) {
      const { questions, indexCurrent } = this.state
      this.saveUserAnswer(questions[indexCurrent], userAnswer)

      if (indexCurrent < questions.length - 1) {
         this.setState({ indexCurrent: indexCurrent + 1 })
      }
   }

   saveUserAnswer(question, answer) {
      question.userAnswer = answer
   }

   onSubmit(current) {
      
   }
}

export default App
