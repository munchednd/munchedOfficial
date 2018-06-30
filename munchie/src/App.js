import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Navvy from './Navvy'
import Mainbody from './Mainbody'

class App extends Component {
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