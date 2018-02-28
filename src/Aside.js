import React, { Component } from 'react';
import './Aside.css';

class Aside extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form onSubmit={this.props.handleSubmit} className="job-form">
          <label htmlFor="title">Title</label>
          <input onChange={this.props.handleChange} type="text" name="title" />
          <label htmlFor="pay">Compensation</label>
          <input onChange={this.props.handleChange}type="text" name="pay" />
          <label htmlFor="description">Description</label>
          <textarea onChange={this.props.handleChange} name="description" rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    )
  }
}

export { Aside };
