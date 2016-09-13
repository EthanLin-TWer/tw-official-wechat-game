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
      return App.random(questions, 3)
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

   onNext() {
      const { questions, indexCurrent } = this.state
      if (!questions[indexCurrent].userAnswer) return ;

      if (indexCurrent < questions.length - 1) {
         this.setState({ indexCurrent: indexCurrent + 1})
         return ;
      }

      localStorage.setItem('questions', JSON.stringify(questions))
   }
}

export default App
