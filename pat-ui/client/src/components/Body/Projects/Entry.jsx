import React, { Component } from 'react';

const Entry = (prop) => (
  <div class="container">
    <div class="project-entry">
      Project Name: {prop.name}
      <br/>
      Project Description: {prop.description}
      <br/>
    </div>
    <div class="project-url">
      <a href={prop.url}>
        <img class="git-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQO4Ko_OfhGZrbubWBTYMtVhdcSmVQmWAgrNHe56lKxuyCBO9eWA"/>
      </a>
    </div>
  </div>
)

export default Entry;