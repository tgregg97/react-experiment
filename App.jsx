import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './src/Home.jsx';
import About from './src/About.jsx';
import Contact from './src/Contact.jsx';

import 'bootstrap/less/bootstrap.less';

class App extends React.Component {
  render () {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
      </Router>
    )
  }
}

render(<App/>, document.getElementById('app'));
