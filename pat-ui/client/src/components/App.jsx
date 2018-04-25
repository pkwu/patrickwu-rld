import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* Nav */}
        </Switch>
        <Switch>
          {/* Body */}
        </Switch>
        <Switch>
          {/* Footer */}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;