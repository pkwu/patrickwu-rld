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
          <div class="nav-right" onClick={() => { document.getElementById('blurb-container').scrollIntoView({ behavior: 'smooth', block: 'end' }) }}>ABOUT ME</div>
          <div class="nav-right" onClick={() => { 
            let ele = document.getElementById('tech-container');
            let pos = ele.getBoundingClientRect().top;
            console.log('scrollTOP ', document.getElementsByClassName('app'));
            console.log('this is ele ', ele);
            console.log('this is pos ', pos);
            window.scrollTo({
              top: pos,
              behavior: 'smooth'
            }) 
          }}>TECHNOLOGIES</div>
          <div class="nav-right" onClick={() => { document.getElementById('project-container').scrollIntoView({ behavior: 'smooth', block: 'end' }) }}>PROJECTS</div>
        </div>
      </div>
    )
  }
}

export default Bar;