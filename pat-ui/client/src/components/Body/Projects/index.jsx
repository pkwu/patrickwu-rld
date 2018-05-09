import React, { Component } from 'react';
import Entry from './Entry';

class Projects extends Component {
  state = {
    projects: [
      {
        name: 'Castle In The Sky',
        description: 'A property management app',
        url: 'https://github.com/thepicklefamily'
      }, 
      {
        name: 'Codesling',
        description: 'Open source, online code sharing platform',
        url: 'https://github.com/lalegacy'
      }, 
      {
        name: '.got(Next)',
        description: 'Google Maps based application for finding pick up sports events',
        url: 'https://github.com/SuperBACP'
      }, 
      {
        name: 'Snakes On A Plane',
        description: 'WORK IN PROGRESS',
        url: 'https://github.com/pkwu/snakes-on-a-plane.io'
      }]
  }

  render() {
    return (
      <div>
        {
          this.state.projects.map( (project, index) => {
            return <Entry 
              name={project.name} 
              description={project.description} 
              url={project.url}
              key={index}
              />
          })
        }
      </div>
    )
  }
}

export default Projects;