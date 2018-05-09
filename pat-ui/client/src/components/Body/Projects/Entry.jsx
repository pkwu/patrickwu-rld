import React, { Component } from 'react';

const Entry = (prop) => (
  <div>
    <div class="project-entry">
      Project Name: {prop.name}
      <br/>
      Project Description: {prop.description}
      <br/>
        Project Link: <a href={prop.url}>{prop.url}</a>
    </div>
  </div>
)

export default Entry;