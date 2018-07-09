import React, { Component } from 'react'

import { auth, googleProvider } from './rebase'

import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse
} from 'reactstrap'

export default class Navvy extends Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            uid: null,
            isOpen: false
        }
    }

    componentWillMount() {
        const uid = localStorage.getItem('uid')

        if (uid) {
            this.setState({ uid })
        }

        auth.onAuthStateChanged(
            (user) => {
                if (user) {
                    this.handleAuth(user)
                }
                else {
                    this.handleUnauth()
                }
            }
        )
    }

    handleAuth = (user) => {
        this.setState({ uid: user.uid })
        alert(`Hello, ${user.displayName}`)
        localStorage.setItem('uid', user.uid)
    }

    handleUnauth = () => {
        this.setState({ uid: null })
        localStorage.removeItem('uid')
    }

    signOut = () => {
        auth.signOut()
        alert(`bye ${this.state.uid}`)
    }

    signedIn = () => {
        alert(this.state.uid)
        return this.state.uid
    }

    authenticate = (provider) => {
        auth.signInWithRedirect(provider)
    }
    toggle() {
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
                                <NavLink onClick={() => this.authenticate(googleProvider)}>Login/Create Account</NavLink>
                            </NavItem>
                            {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

{/* <Navbar color="light" light expand="md">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">munched</a>
                {/* <!--<a href="login.html" className="navbar-brand">Order Now</a>--> */}
{/* </div> */ }

{/* <!-- Collect the nav links, forms, and other content for toggling --> */ }
{/* <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="index.html">Home<span className="sr-only">(current)</span></a></li>
                  <li className="inactive"><a href="order.html" id="OrderNowNav">Order Now <span className="sr-only">(current)</span></a></li>
                  {/* <!-- <li><a href="#">Link</a></li> --> */}
{/* <!-- <li className="dropdown"> */ }
{/* <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated </a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul> --> */}
{/* <!-- </li> --> */ }
{/* </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="login.html" id="LoginCreateAccount">Login/Create Account</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" id="ProfileDropdown">Profile <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="information.html">Information</a></li>
                      <li><a href="locations.html">Saved Locations</a></li>
                      <li><a href="saved_orders.html">Saved Orders</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="settings.html">Settings</a></li>
                      <li><a href="login.html" id="Logout">Log Out</a></li>
                    </ul>
                  </li>
                </ul>
              </div> */}
{/* <!-- /.navbar-collapse --> */ }
{/* </div>
            {/* <!-- /.container-fluid --> */}
{/* </Navbar> */ }