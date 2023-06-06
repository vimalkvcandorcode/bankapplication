import React, { Component } from 'react'
import { Placeholder } from 'react-bootstrap';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from './login';
import Register from './register'
import Home from './Home'
import Deposit from './deposit'
import Withdraw from './withdraw'
import Transfer from './transfer'
import Statement from './statement'


export default class Navbarcamp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                       
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                
                                <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Deposit">Deposit</Nav.Link>
                                <Nav.Link as={Link} to="/Withdraw">Withdraw</Nav.Link>
                                <Nav.Link as={Link} to="/Transfer">Transfer</Nav.Link>
                                <Nav.Link as={Link} to="/Statement">Statement</Nav.Link>
                                <Nav.Link as={Link} to="/">Logout</Nav.Link>


                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                    <Route path="/Statement">
                            <Statement />
                        </Route>
                    <Route path="/Transfer">
                            <Transfer />
                        </Route>
                        <Route path="/Withdraw">
                            <Withdraw />
                        </Route>
                        <Route path="/Deposit">
                            <Deposit/>
                        </Route>
                        <Route path="/Home">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
