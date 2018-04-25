import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Bar from '../components/Nav/Bar';
import Main from '../components/Body/Main';
import Footer from '../components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Bar}/>
        </Switch>
        <br/><br/>
        <Switch>
          <Route path='/' component={Main}/>
        </Switch>
        <br/><br/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;