import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import { auth, googleProvider } from './rebase'
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
    alert(`Hello, ${user.displayName}`)
    localStorage.setItem('uid', user.uid)
  }

  handleUnauth = () => {
    this.setState({ uid: null })
    localStorage.removeItem('uid')
  }

  signOut = () => {
    auth.signOut()
  }

  signedIn = () => {
    alert(this.state.uid)
    return this.state.uid
  }

  authenticate = (provider) => {
    auth.signInWithPopup(provider)
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
          <button
            className="google"
            onClick={() => this.authenticate(googleProvider)}
          >
            click here
          </button>
        </body>
      </html>
    );
  }
}

export default App;