import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import { Result } from './pages'

ReactDOM.render((
   <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/result" component={Result} />
   </Router>
), document.getElementById('root'))
