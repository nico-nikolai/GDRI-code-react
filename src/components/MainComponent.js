import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import { INDEX } from '../shared/homepage';
import HomepageInfo from './HomepageInfoComponent';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        index: INDEX,
        selectedIndex: null
      }
    }

    onIndexSelect(indexId) {
        this.setState({selectedIndex: indexId});
    }

  render() {
      return (
          <div>
              <Navbar dark color="secondary">
              <div className="container">
                  <NavbarBrand href="/">The Wizards Workshop</NavbarBrand>
              </div>
              </Navbar>
              <Directory item = {this.state.index} onClick={indexId => this.onIndexSelect(indexId)} />
              <HomepageInfo index = {this.state.index.filter(index => index.id === this.state.selectedIndex)[0]} />
          </div>
      );
  }
}

export default Main;