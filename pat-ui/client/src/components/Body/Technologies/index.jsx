import React, { Component } from 'react';
import Entry from './Entry';

class Technologies extends Component {
  state = {
    technologies: [ 'Javascript', 'NodeJS', 'ExpressJS', 'ReactJS', 'Redux', 'NoSQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'HTML5', 'CSS3', 'SASS', 'AWS']
  }

  render() {
    return (
      <div class="tech-container">
        <div class="tech-header">A list of Technologies!</div>
        <div class="tech-list">
          {this.state.technologies.map( (tech, index) => {
            return <Entry name={tech} key={index}/>
          })}
        </div>
        <div class="tech-footer">Feel free to inquire about a technology not listed above!</div>
      </div>
    )
  }
}

export default Technologies;