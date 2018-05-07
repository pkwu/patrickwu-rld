import React, { Component } from 'react';
import Entry from './Entry';

class Projects extends Component {
  state = {
    projects: [{name: 'Project #1'}, {name: 'Project #2'}, {name: 'Project #3'}, {name: 'Project #4'}]
  }

  render() {
    return (
      <div>
        {
          this.state.projects.map( (project, index) => {
            return <Entry name={project.name} key={index}/>
          })
        }
      </div>
    )
  }
}

export default Projects;