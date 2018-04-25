import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav/Bar.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Nav}/>
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