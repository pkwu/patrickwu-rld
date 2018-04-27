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
      <div>
        <h5>Patrick K Wu</h5>
        <button>PROJECTS</button>
        <button>TECH STACK</button>
        <button>ABOUT ME</button>
        <button>CONTACT ME</button>
        <button>RESUME</button>
      </div>
    )
  }
}

export default Bar;