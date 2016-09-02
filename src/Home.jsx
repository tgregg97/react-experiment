import React from 'react';
import {render} from 'react-dom';
import { Button } from 'react-bootstrap';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
class Home extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Home;
