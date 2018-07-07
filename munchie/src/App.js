import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import { auth } from './rebase'
// import logo from './logo.svg';
import './App.css';

import Navvy from './Navvy'
import Mainbody from './Mainbody'

class App extends Component {
  state = {
    uid: null
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
    localStorage.setItem('uid', user.uid)
  }

  handleUnauth = () => {
    this.setState({ uid: null })
    localStorage.removeItem('uid')
  }

  signOout = () => {
    auth.signOut()
  }

  signedIn = () => {
    return this.state.uid
  }

  render() {
    return (
      <html>
        <head>
          <title>munched</title>
        </head>
        <body>
          <Navvy />
          <Mainbody />
        </body>
      </html>
    );
  }
}

export default App;