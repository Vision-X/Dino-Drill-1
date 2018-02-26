import React, { Component } from 'react';
import { Header } from './Header.js';
import { Joblistings } from './Joblistings.js';
import { Footer } from './Footer.js';
import { Aside } from './Aside.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Joblistings />
          <Aside />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
