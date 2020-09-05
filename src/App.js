import React from 'react';
import './App.css';
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import Singlerooms from "./pages/singlerooms";
import Error from "./pages/error";
import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/rooms/" component = {Rooms}/>
      <Route exact path = "/rooms/:slug" component = {Singlerooms}/>
      <Route component = {Error}/>
      </Switch>
    </>
  );
}

export default App;
