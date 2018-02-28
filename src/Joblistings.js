import React, { Component } from 'react';
import './Joblistings.css';
import { Listing } from './Listing.js';


class Joblistings extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h2>Job Listings</h2>
        <ul id="job-listings">
          {this.props.data.map(job => {
            return <Listing  key={job.id} job={job} />
          })
        }
        </ul>
      </section>
    )
  }
}

export { Joblistings };
