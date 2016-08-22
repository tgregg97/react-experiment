import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return <h1> Set up! </h1>
  }
}

render(<App/>, document.getElementById('app'));
