import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="secondary">
              <div className="container">
                  <NavbarBrand href="/">The Wizards Workshop</NavbarBrand>
              </div>
              </Navbar>
          </div>
      );
  }
}

export default App;
