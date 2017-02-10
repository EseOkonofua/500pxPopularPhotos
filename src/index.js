import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'
import {Provider} from 'react-redux'
import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import allReducers from './reducers'

import App from './containers/app'
import Home from './containers/home'


require('./styles.scss');

const store = createStore(allReducers, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router history = {browserHistory}>
      <Route path='/' component= {App}>
        <IndexRoute component={Home}/>
      </Route>

    </Router>
  </Provider>
, document.getElementById('app'));
