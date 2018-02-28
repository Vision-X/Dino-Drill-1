import React, { Component } from 'react';
import './Joblistings.css';
import { Listing } from './Listing.jsx';


class Joblistings extends Component {
  constructor() {
    super();
    this.state = {
      dataAry: [],
    };
  }

  componentDidMount() {
    var dataGrab = (response) => {
      console.log(response, "response for dan");
       this.setState({dataAry: response});
    };
    let apiURL = "./listings.json";
    return fetch(apiURL)
          .then(response => response.json())
          .then(dataGrab)


    //fetch body here
    //map over data
    //return Listing jsx w/ data
    //this.setState({dataAry: data})
    //console.log("state", this.state.dataAry);
  }

  render() {
    return (
      <section>
        <h2>Job Listings</h2>
        <ul id="job-listings">
          {this.state.dataAry.map(job => {
            return <Listing  key={job.id} job={job} />
          })
        }
        </ul>
      </section>
    )
  }
}

export { Joblistings };
