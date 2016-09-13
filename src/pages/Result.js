import React, { Component } from 'react'
import { Link } from 'react-router'
import { Header, Background, Footer, PercentageCircle } from '../components'
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
                  您本次答题得分
               </p>
            </div>
            <div className="ranking-panel">
               <span className="score-result">
                  <span className="score">{score}</span>
                  分
               </span>
               <PercentageCircle ranking={ranking}/>
            </div>
            <div className="ranking-text">
               <p>
                  击败了全国 { (ranking * 100).toFixed(2) + '%' } 的小伙伴!
               </p>
            </div>
            <div className="marketing">
               <ul className="marketing-option">
                  <li className="join-us">
                     <a href="http://join.thoughtworks.cn/">加入我们</a>
                  </li>
                  <li className="play-again">
                     <Link to="/">再玩一次</Link>
                  </li>
               </ul>
            </div>
            <Footer />
         </div>
      )
   }

}

export default Result
