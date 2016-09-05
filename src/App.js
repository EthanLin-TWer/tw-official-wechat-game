import React, { Component } from 'react';
import './App.css';
import Questions from './data.json'

class App extends Component {

   render() {
      console.info(this.props)
      return (
         <div className="App">
            <div className="question-panel">
               welcome {this.props.data}
            </div>
         </div>
      )
   }
}
App.defaultProps = {
   data: Questions.Hello
}


export default App;
