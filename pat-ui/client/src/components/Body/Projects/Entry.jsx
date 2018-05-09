import React, { Component } from 'react';

const Entry = (prop) => (
  <article>
    <h3 class="col-1-2">
      Project Name: {prop.name}
      <br/>
      Project Description: {prop.description}
      <br/>
        Project Link: <a href={prop.url}>{prop.url}</a>
    </h3>
  </article>
)

export default Entry;