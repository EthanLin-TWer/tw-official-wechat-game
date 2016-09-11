import React, { Component } from 'react';
import { Question } from './pages'
import { Navigation, Background, Header, Footer } from './components'

import Data from './data/questions.json'
import './App.styl'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
   constructor(props) {
      super(props)
      this.onNext = this.onNext.bind(this)
      this.renderPrevious = this.renderPrevious.bind(this)
      this.renderNext = this.renderNext.bind(this)
      this.state = {
         questions: App.loadQuestions(),
         indexCurrent: 0
      }
   }

   static loadQuestions() {
      return App.shuffleQuestions(Data).map((question, index) => ({
         ...question,
         index
      })).map(question => ({
         ...question,
         options: App.shuffleOptions(question.options)
      }))
   }

   static shuffleQuestions(questions) {
      return App.random(questions, 2)
   }

   static shuffleOptions(options) {
      return App.random(options, 4)
   }

   static random(array, number) {
      if (array.length < number) return array
      let choosedIndecies = []
      let result = []

      while (result.length < number) {
         let index
         do {
            index = Math.floor(Math.random() * array.length)
         } while (choosedIndecies.includes(index))

         choosedIndecies.push(index)
         result.push(array[index])
      }

      return result
   }

   render() {
      const { questions, indexCurrent } = this.state
      return (
         <div className="App">
            <Header />
            <Question question={questions[indexCurrent]}/>
            <Background />
            <Navigation index={this.state.indexCurrent} total={this.state.questions.length}
                        onNext={this.onNext} onPrevious={this.renderPrevious}
            />
            <Footer />
         </div>
      )
   }

   renderPrevious(current) {
      if (current <= 0) return;

      this.setState({ indexCurrent: current - 1 })
   }

   renderNext(userAnswer) {
      const { questions, indexCurrent } = this.state
      questions[indexCurrent].userAnswer = userAnswer

      if (indexCurrent < questions.length - 1) {
         this.setState({ indexCurrent: indexCurrent + 1 })
      }
   }

   onNext() {
      const { questions, indexCurrent } = this.state
      // if (!questions[indexCurrent].userAnswer) return ;

      if (indexCurrent < questions.length - 1) {
         this.setState({ indexCurrent: indexCurrent + 1})
         return ;
      }

      this.calculateScore(questions);
   }

   calculateScore(questions) {
      if (questions.every(question => question.userAnswer)) {
         const correctAnswers = questions.filter(those => {
            return those.correctAnswer === those.userAnswer
         }).length
         const score = Math.round(correctAnswers / questions.length * 100)
         const record = {
            id: new Date().getTime(),
            score: score
         }
         console.log('record created: ' + JSON.parse(record))
         localStorage.setItem('record', JSON.stringify(record))
         console.log('record set to local storage: ' + record)
      }
   }
}

export default App
