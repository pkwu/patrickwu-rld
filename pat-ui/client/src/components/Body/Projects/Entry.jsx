import React, { Component } from 'react';

const Entry = (prop) => (
  <div class="project-entry-container">
    <div class="project-detail">
      <div class="project-name">
        {prop.name}
      </div>
      <div class="project-descrip">
        {prop.description}
      </div>
    </div>
    <div class="project-url">
      <a href={prop.url}>
        <img class="git-photo" src="http://pluspng.com/img-png/github-free-icon-512.png"/>
      </a>
    </div>
  </div>
)

export default Entry;