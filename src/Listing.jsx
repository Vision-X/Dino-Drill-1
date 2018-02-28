import React, { Component } from 'react';

class Listing extends Component {
  render() {
    return (
      <li>
        <h4>{this.props.job.title}
        <small>{this.props.job.pay}</small>
        <p>{this.props.job.description}</p>
        <small>{this.props.job.interested.length} 'dinos are interested in this job'</small>
        </h4>
      </li>
    );
  }
}

export { Listing };
