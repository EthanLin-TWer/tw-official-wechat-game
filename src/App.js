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
      console.log(this.state.questions)
   }

   static loadQuestions() {
      return App.random(Data, 15).map((question, index) => ({ ...question, index }))
   }

   static random(questions, number) {
      if (questions.length <= number) return questions
      let choosedIndecies = []
      let result = []

      while (result.length < number) {
         let index
         do {
            index = (Math.random() * questions.length).toFixed(0)
         } while (choosedIndecies.includes(index))

         choosedIndecies.push(index)
         result.push(questions[index])
      }

      return result
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
      questions[indexCurrent].userAnswer = userAnswer

      if (indexCurrent < questions.length - 1) {
         this.setState({ indexCurrent: indexCurrent + 1 })
      }
   }

   onSubmit() {
      const { questions } = this.state
      if (questions.every(question => question.userAnswer)) {
         const correctAnswers = questions.filter(those => those.correctAnswer === those.userAnswer).length
         const score = correctAnswers / questions.length * 100
         console.log('your score: ' + score)
      }
   }
}

export default App
