import React from 'react';
import {render} from 'react-dom';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { Router, Route, Link, browserHistory } from 'react-router';

class Header extends React.Component {
  render () {
    return(
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" style={{color:'white'}}>Trevor Gregg</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}><Link to="/About" style={{color:'white'}}>About Me</Link></NavItem>
            <NavItem eventKey={2}><Link to="/Contact" style={{color:'white'}}>Contact Me</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
