import React, { Component } from 'react';

class Bar extends Component {
  constructor() {
    super();
    this.state = {
      //
    }
  }

  render() {
    return (
      <div class="nav-container">
        <h3 class="nav-left">Patrick K Wu</h3>
        <button class="nav-right">PROJECTS</button>
        <button class="nav-right">TECH STACK</button>
        <button class="nav-right">ABOUT ME</button>
        <button class="nav-right">CONTACT ME</button>
        <button class="nav-right">RESUME</button>
      </div>
    )
  }
}

export default Bar;