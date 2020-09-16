import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { INDEX } from '../shared/homepage';
import HomepageInfo from './HomepageInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
              <Header />
              <Directory item = {this.state.index} onClick={indexId => this.onIndexSelect(indexId)} />
              <HomepageInfo index = {this.state.index.filter(index => index.id === this.state.selectedIndex)[0]} />
              <Footer />
          </div>
      );
  }
}

export default Main;