import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import './App.css';
import Login from '../Login';
import Footer from '../footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Login />
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
