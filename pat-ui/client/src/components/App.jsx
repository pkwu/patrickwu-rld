import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Bar from '../components/Nav/Bar';
import Main from '../components/Body/Main';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Technologies from '../components/Body/Technologies';
import Blurb from '../components/Body/Blurb';

const App = () => {
  return (
    <BrowserRouter>
      <div class='container'>
        <Bar/>
        <Banner/>
        <Technologies/>
        <Blurb/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;