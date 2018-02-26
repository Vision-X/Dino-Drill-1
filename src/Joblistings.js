import React, { Component } from 'react';
import './Joblistings.css';

class Joblistings extends Component {
  render() {
    return (
      <section>
        <h2>Job Listings</h2>
        <ul id="job-listings">
        </ul>
      </section>
    )
  }
}

export { Joblistings };
