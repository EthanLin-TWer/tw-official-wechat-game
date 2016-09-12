import React, { Component } from 'react'
import { Header, Background, PercentageCircle } from '../components'
import http from 'http';

import './Result.css'

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
      const id = new Date().getTime()

      return { id, score }
   }

   render() {
      const { score, ranking } = this.state.record
      console.log(ranking)
      return (
         <div className="result">
            <Header />
            <div className="score-panel">
               <p>
                  你本次答题得分为: <b>{ score }</b>,
               </p>
            </div>
            <div className="ranking-panel">
               <p>
                  击败了全国 { (ranking * 100).toFixed(2) + '%' } 的小伙伴!
               </p>
               <PercentageCircle ranking={ranking}/>
            </div>
            <div className="marketing">
               <ul className="marketing-option">
                  <li className="join-us">
                     <a>加入我们</a>
                  </li>
                  <li className="play-again">
                     <a>再玩一次</a>
                  </li>
               </ul>
            </div>
         </div>
      )
   }

}

export default Result
