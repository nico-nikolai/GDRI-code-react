import React, { Component } from  'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>The Wizard's Workshop</h1>
                                <h2>Ye Olde Spoon</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">Directory</NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;