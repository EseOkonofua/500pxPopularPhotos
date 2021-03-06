import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './containers/app'
import Home from './containers/home'


require('./styles.scss');
_500px.init({
  sdk_key: 'your sdk key here'
});


render(
    <Router history = {browserHistory}>
      <Route path='/' component= {App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
, document.getElementById('app'));
