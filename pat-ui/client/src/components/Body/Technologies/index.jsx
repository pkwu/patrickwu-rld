import React, { Component } from 'react';
import Entry from './Entry';

class Technologies extends Component {
  state = {
    technologies: [ 'Javascript', 'NodeJS', 'ExpressJS', 'ReactJS', 'Redux', 'NoSQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'HTML5', 'CSS3', 'SASS', 'AWS']
  }

  render() {
    return (
      <div>
        <h5 class="col-4">A list of Technologies!</h5>
        <div>
          {this.state.technologies.map( (tech, index) => {
            return <Entry name={tech} key={index}/>
          })}
        </div>
        <div class="col-4">Feel free to inquire about a technology not listed above!</div>
      </div>
    )
  }
}

export default Technologies;