import React, { Component } from 'react'
import { Header, Background } from '../components'
import http from 'http'

class Result extends Component {

   constructor(props) {
      super(props)
      this.state = { record: {} }
   }

   componentDidMount() {
      const questions = JSON.parse(localStorage.getItem('questions'))
      const record = this.calculateScore(questions)
      const request = http.request({
         hostname: 'localhost',
         port: 8080,
         path: '/tw-game/record',
         method: 'POST',
         headers: { 'Content-Type': 'application/json' }
      }, response => {
         response.on('data', content => {
            const id = JSON.parse(content).id
            http.get('http://localhost:8080/tw-game/record/' + id + '/defeatPercent', response => {
               response.on('data', content => {
                  this.setState({
                     record: { ...record, ranking: content }
                  })
               })
            })
         })
      })
      request.write(JSON.stringify(record))
      request.end()

   }

   calculateScore(questions) {
      if (!questions.every(question => question.userAnswer)) {
         console.log('perhaps you have questions not filling up')
      }

      const correctAnswers = questions.filter(those => {
         return those.correctAnswer === those.userAnswer
      }).length
      const score = Math.round(correctAnswers / questions.length * 100)

      return {
         id: new Date().getTime(),
         score: score
      }
   }

   render() {
      return (
         <div className="result">
            <Header />
            {this.state.record.id},
            {this.state.record.score},
            {this.state.record.ranking}
            <Background />
         </div>
      )
   }

}

export default Result