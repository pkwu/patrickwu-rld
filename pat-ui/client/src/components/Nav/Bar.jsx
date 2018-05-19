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
            Patrick Wu
          </div>
        </div>
        <div class="nav-right-container">
          <div class="nav-right">RESUME</div>
          <div class="nav-right">CONTACT ME</div>
          <div class="nav-right" onClick={() => { document.getElementById('blurb-container').scrollIntoView({ behavior: 'smooth', block: 'center' }) }}>ABOUT ME</div>
          <div class="nav-right" onClick={() => { document.getElementById('tech-container').scrollIntoView({ behavior: 'smooth', block: 'center' }) }}>TECHNOLOGIES</div>
          <div class="nav-right" onClick={() => { document.getElementById('project-container').scrollIntoView({ behavior: 'smooth', block: 'center' }) }}>PROJECTS</div>
        </div>
      </div>
    )
  }
}

export default Bar;