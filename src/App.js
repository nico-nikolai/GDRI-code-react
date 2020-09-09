import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { HOMEPAGE } from './shared/homepage';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        homepage: HOMEPAGE
      }
    }
  render() {
      return (
          <div className="App">
              <Navbar dark color="secondary">
              <div className="container">
                  <NavbarBrand href="/">The Wizards Workshop</NavbarBrand>
              </div>
              </Navbar>
              <Directory homepage = {this.state.homepage} />
          </div>
      );
  }
}

export default App;
