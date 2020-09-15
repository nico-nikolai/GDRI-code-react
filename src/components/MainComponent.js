import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import { INDEX } from '../shared/homepage';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        index: INDEX,
        selectedIndex: null
      }
    }

    onIndexSelect(index) {
        this.setState({selectedIndex: index});
    }

  render() {
      return (
          <div>
              <Navbar dark color="secondary">
              <div className="container">
                  <NavbarBrand href="/">The Wizards Workshop</NavbarBrand>
              </div>
              </Navbar>
              <Directory index = {this.state.index} />
              <
          </div>
      );
  }
}

export default Main;