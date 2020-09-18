import React, { Component } from 'react';
import Directory from './DirectoryComponent';
//import HomepageInfo from './HomepageInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { INDEX } from '../shared/homepage';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        index: INDEX,
      }
    }



  render() {
      const HomePage = () => {
          return (
              <Home />
          )
      }
      return (
          <div>
            <Header />
            <Switch>
                <Route path = '/home' component={HomePage} />
                <Route exact path='/directory' render={() => <Directory item = {this.state.index} />} />
                <Route exact path='/contactus' component={Contact} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
          </div>
      );
  }
}

export default Main;