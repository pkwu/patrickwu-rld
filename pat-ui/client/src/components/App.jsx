import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Bar from '../components/Nav/Bar';
import Main from '../components/Body/Main';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const App = () => {
  return (
    <BrowserRouter>
      <div class='container'>
        <Switch>
          <Route path='/' component={Bar} class="row"/>
        </Switch>
        <Switch>
          <Route path='/' component={Banner} class="row"/>
        </Switch>
        <Switch>
          <Route path='/' component={Main}/>
        </Switch>
        <div class="wrapper">
          <Footer class="row"/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;