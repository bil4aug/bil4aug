import React, { Component } from 'react';
import logo from './loader.svg';
import './bootstrap.min.css';
import './App.css';
import Data from './Data';
import NF404 from './NF404';
import Document from './Document';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import Details from './Details';

class App extends Component {
  
  constructor()
  {
    super();
    this.state = {route:window.location.hash.substring(1)};
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    var top = (<Navbar staticTop inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Contour Assessment</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      
      <Nav pullRight>
        <NavItem eventKey={1} href="#Home">
          Application
        </NavItem>
        <NavItem eventKey={2} href="#Documentation">
          Documentation
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
  var cmp = null;
    switch(this.state.route.toLowerCase().split('/')[0])
    {
      case "":      
      case "home":
      cmp = <Data />;
      break ;
      case "documentation":
      cmp = <Document />;
      break;
      case "details":
      cmp = <Details word={this.state.route.toLowerCase().split('/')[1]}/>
      break;
      default:
      cmp = <NF404/>
      break;
    }
    return (
      <div className="App">
      {top}
      
    {cmp}
    </div>);
   
    
  }
}

export default App;
