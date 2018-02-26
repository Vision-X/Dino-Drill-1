import React, { Component } from 'react';
import './Aside.css';

class Aside extends Component {
  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form class="job-form">
          <label for="title">Title</label>
          <input type="text" name="title" />
          <label for="pay">Compensation</label>
          <input type="text" name="pay" />
          <label for="description">Description</label>
          <textarea name="description" rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    )
  }
}

export { Aside };
