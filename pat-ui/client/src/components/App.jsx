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
          <div class="wrapper">
            <Route path='/' component={Bar} class="row"/>
          </div>
        </Switch>
        <br/><br/>
        <Switch>
          <div class="wrapper">
            <Route path='/' component={Banner} class="row"/>
          </div>
        </Switch>
        <br/><br/>
        <Switch>
          <Route path='/' component={Main}/>
        </Switch>
        <br/><br/>
        <div class="wrapper">
          <Footer class="row"/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;