import React, { Component } from 'react';
import { Header } from './Header.js';
import { Joblistings } from './Joblistings.js';
import { Footer } from './Footer.js';
import { Aside } from './Aside.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      dataAry: [],
      title: '',
      pay: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let targetField = event.target.name;
    if (targetField === 'title') {
        this.setState({title: event.target.value});
    } else if (targetField === 'pay') {
        this.setState({pay: event.target.value})
    } else {
        this.setState({description: event.target.value})
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let updatedAry = this.state.dataAry;
    let newListing = {id: (updatedAry.length + 1),
                      interested: 0,
                      title: this.state.title,
                      pay: this.state.pay,
                      description: this.state.description};
    updatedAry.unshift(newListing);
    this.setState({dataAry: updatedAry})
  }

  componentDidMount() {
    var dataGrab = (response) => {
      this.setState({dataAry: response});
    };
    let apiURL = "./listings.json";
    return fetch(apiURL)
          .then(response => response.json())
          .then(dataGrab)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Joblistings data={this.state.dataAry}/>
          <Aside handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
