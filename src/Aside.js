import React, { Component } from 'react';
import './Aside.css';

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '',
                  pay: '',
                  description: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let targetField = event.target.name;
    if (targetField === 'title') {
        this.setState({title: event.target.value});
        console.log("title", this.state.title);
    } else if (targetField === 'pay') {
        this.setState({pay: event.target.value})
        console.log("pay", this.state.pay)
    } else {
      this.setState({description: event.target.value})
      console.log("description", this.state.description)
      console.log("this.state", this.state);
    }
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    console.log(this.state, "submitted data");

    //onSubmit I want to unshift the object to the front of the array
  }

  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form onSubmit={this.handleSubmit} className="job-form">
          <label htmlFor="title">Title</label>
          <input value={this.state.value} onChange={this.handleChange} type="text" name="title" />
          <label htmlFor="pay">Compensation</label>
          <input value={this.state.value} onChange={this.handleChange}type="text" name="pay" />
          <label htmlFor="description">Description</label>
          <textarea value={this.state.value} onChange={this.handleChange} name="description" rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    )
  }
}

export { Aside };
