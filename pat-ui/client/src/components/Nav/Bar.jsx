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
        <div class="nav-left-container">
          <div class="nav-left">
            Patrick K Wu
          </div>
        </div>
        <div class="nav-right-container">
          <button class="nav-right" onClick={() => { document.getElementById('project-container').scrollIntoView({ behavior: 'smooth', block: 'end' }) }}>PROJECTS</button>
          <button class="nav-right">TECHNOLOGIES</button>
          <button class="nav-right">ABOUT ME</button>
          <button class="nav-right">CONTACT ME</button>
          <button class="nav-right">RESUME</button>
        </div>
      </div>
    )
  }
}

export default Bar;