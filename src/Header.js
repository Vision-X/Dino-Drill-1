import React, { Component } from 'react';
import gdino from './g-dino';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={gdino} alt="dino logo"/>
      </header>
    );
  }
}

export { Header };
