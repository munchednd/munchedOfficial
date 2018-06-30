import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Navvy from './Navvy'
import Mainbody from './Mainbody'

// import Main from './Main'

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

const styles = {
  h1: {
    fontStyle: 'bold',
    fontFamily: "'Dekko', cursive",
    fontSize: 60
  },
  hText: {
    fontSize: 20
  }
}