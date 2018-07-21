import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, googleProvider } from './rebase'

// import logo from './logo.svg';
import './App.css';

import Navvy from './Navvy'
import Mainbody from './Mainbody'
import Location from './Location'
import Order from './Order'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      logged: 'nope'
    }

    this.functions.handleAuth = this.functions.handleAuth.bind(this)
    this.functions.handleUnauth = this.functions.handleUnauth.bind(this)
    this.functions.signedIn = this.functions.signedIn.bind(this)
    this.functions.login = this.functions.login.bind(this)
    this.functions.authenticate = this.functions.authenticate.bind(this)
  }

  functions = {
    handleAuth(user) {
      this.setState({ user: user })
      this.setState({ logged: 'yep' })
      localStorage.removeItem('uid')
      localStorage.setItem('uid', user.uid)
      console.log(localStorage.uid)
      console.log(user.displayName)
    },

    handleUnauth() {
      auth.signOut()
      console.log('handled')
      this.setState({ user: null, logged: 'nope' })
      localStorage.removeItem('uid')
    },

    signOut() {
      auth.signOut()
      alert(`bye ${this.state.uid}`)
    },

    signedIn() {
      return this.state.uid
    },

    authenticate(provider) {
      var that = this
      auth.signInWithPopup(provider).then( (result) => 
        auth.onAuthStateChanged(
          (user) => {
            if (user) {
              that.functions.handleAuth(user)
            }
            else {
              that.functions.handleUnauth()
            }
          }
        ))
    },
      
    login() {
      // debugger
      this.setState({ uid: 'bay' })
      alert('logged in')
      console.log('hi')

    }
  }

  render() {
    return (
      <html>
        <head>
          <title>munched</title>
        </head>
        <body>
          <Navvy functions={this.functions} key={this.state.logged} user={this.state.user}/>
          {/* <Mainbody /> */}
          {/* <Location/> */}
          <Order />
        </body>
      </html>
    );
  }
}

export default App;