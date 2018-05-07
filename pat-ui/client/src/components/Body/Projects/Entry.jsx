import React, { Component } from 'react';

const Entry = (prop) => (
  <div>
    <h3>
      {JSON.stringify(prop.name)}
    </h3>
  </div>
)

export default Entry;