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
        <Projects class="row"/>
        <Technologies class="row"/>
        <Blurb class="row"/>
      </div>
    )
  }
}

export default Main;