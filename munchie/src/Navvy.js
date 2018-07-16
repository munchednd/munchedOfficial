import React, { Component } from 'react'
import { auth, googleProvider } from './rebase'

import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Collapse
} from 'reactstrap'

export default class Navvy extends Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
            logText: this.props.user ? `Hello, ${this.props.user.displayName}` : 'Login'
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (

            <div>
                <Navbar color="light" light fixed="top" expand="md">
                    <NavbarBrand href="/">munched</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/order/">Order Now</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => {
                                    this.props.functions.authenticate(googleProvider)
                                }}>{this.state.logText}</NavLink>
                            </NavItem>
                            {this.props.user &&
                                <NavItem>
                                    <NavLink onClick={() => {
                                        this.props.functions.handleUnauth() }} >
                                        Logout
                                </NavLink>
                                </NavItem>}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}