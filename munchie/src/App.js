import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, googleProvider } from './rebase'

// import logo from './logo.svg';
import './App.css';

import Navvy from './Navvy'
import Mainbody from './Mainbody'
import { callbackify } from 'util';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: null,
      logged: 0
    }

    this.functions.handleAuth = this.functions.handleAuth.bind(this)
    this.functions.handleUnauth = this.functions.handleUnauth.bind(this)
    this.functions.signedIn = this.functions.signedIn.bind(this)
    this.functions.login = this.functions.login.bind(this)
    this.functions.authenticate = this.functions.authenticate.bind(this)
  }



  // componentDidUpdate() {
  //   // const uid = localStorage.getItem('uid')

  //   // if (uid) {
  //   //   this.setState({ uid })
  //   // }

    // auth.onAuthStateChanged(
    //   (user) => {
    //     if (user) {
    //       this.functions.handleAuth(user)
    //       console.log('handled auth')
    //       return
    //     }
    //     else {
    //       this.functions.handleUnauth()
    //       return
    //     }
    //   }
    // )
  // }

  functions = {
    handleAuth(user) {
      this.setState({ uid: user.uid })
      // alert(`Hello, ${user.displayName}`)
      localStorage.removeItem('uid')
      localStorage.setItem('uid', user.uid)
      console.log(localStorage.uid)
      console.log(user.displayName)
    },

    handleUnauth() {
      this.setState({ uid: null })
      localStorage.removeItem('uid')
    },

    signOut() {
      auth.signOut()
      alert(`bye ${this.state.uid}`)
    },

    signedIn() {
      alert(this.state.uid)
      return this.state.uid
    },

    authenticate(provider) {
      var that = this
      const result = auth.signInWithPopup(provider).then( (result) => 
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
          <Navvy functions={this.functions} />
          <Mainbody />
        </body>
      </html>
    );
  }
}

export default App;