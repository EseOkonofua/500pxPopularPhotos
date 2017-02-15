import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './containers/app'
import Home from './containers/home'


require('./styles.scss');
_500px.init({
  sdk_key: '3450468445072c16a703aacb86bcae3fbf01fa38'
});


render(
    <Router history = {browserHistory}>
      <Route path='/' component= {App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
, document.getElementById('app'));
