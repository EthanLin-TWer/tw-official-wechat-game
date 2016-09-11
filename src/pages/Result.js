import React, { Component } from 'react'
import { Header, Background } from '../components'
import http from 'http'

class Result extends Component {

   constructor(props) {
      super(props)
      this.state = {
         record: {
            id: '',
            score: '',
            ranking: 0
         }
      }
   }

   componentDidMount() {
      const record = JSON.parse(localStorage.getItem('record'))
      const request = http.request({
         hostname: 'localhost',
         port: 8080,
         path: '/tw-game/record',
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         }
      }, response => {
         response.on('data', content => {
            const id = JSON.parse(content).id

            http.get('http://localhost:8080/tw-game/record/' + id + '/defeatPercent', response => {
               response.on('data', content => {
                  const ranking = content
                  this.setState({
                     record: {
                        ...record, ranking
                     }
                  })
                  console.log(ranking)
                  console.log(this.state)
               })
            })
         })
      })
      request.write(JSON.stringify(record))
      request.end()

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