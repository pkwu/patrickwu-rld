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
        <Projects/>
        <br/><br/>
        <Technologies/>
        <br/><br/>
        <Blurb/>
      </div>
    )
  }
}

export default Main;