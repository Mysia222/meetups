import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route as Routes } from 'react-router-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { MyMeetUps } from "./components/MyMeetUps";
import { LogIn } from "./components/LogIn";
import { Register } from "./components/Register";

import './App.css';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class Navigation extends Component {

  render() {

    return (
      <Router  className="App" history={history}>
      <div>
      <Header/>
      <Routes path='/mymeetups' component = {MyMeetUps} />
      <Routes exact path='/' component = {Home} />
      <Routes exact path='/login' component = {LogIn}/>
      <Routes exact path='/register' component = {Register}/>
      <Footer/>
      </div>
     </Router>
    );
  }
}

export default Navigation;
