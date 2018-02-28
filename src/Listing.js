import React, { Component } from 'react';

class Listing extends Component {
  render() {
    return (
      <li>
        <h4>{this.props.job.title}</h4>
        <small>{this.props.job.pay}</small>
        <p>{this.props.job.description}</p>
        <small>{this.props.job.interested} {'dinos are interested in this job'}</small>
      </li>
    );
  }
}

export { Listing };
