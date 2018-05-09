import React, { Component } from 'react';
import Projects from './Projects';
import Technologies from './Technologies';
import Blurb from './Blurb';

class Main extends Component {
  state = {
    
  }

  render() {
    return (
      <div>
        <div class="wrapper">
          <Projects class="row"/>
        </div>
        <br/><br/>
        <br/><br/>
        <div class="wrapper">
          <Technologies class="row"/>
        </div>
        <br/><br/>
        <div class="wrapper">
          <Blurb class="row"/>
        </div>
      </div>
    )
  }
}

export default Main;