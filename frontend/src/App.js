import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Importing the pages

import Home from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Mad from './pages/Mad';
import Media from './pages/Media';
import Blog from './pages/Blog';
import Test from './pages/test'

function App() {
  return (
    <Switch>
      <Route exact path="/" exact component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/impact" component={ Impact } />
      <Route path="/mad" component={ Mad } />
      <Route path="/media" component={ Media } />
      <Route path="/blog" component={ Blog } />
      <Route path="/test" component={ Test } />
    </Switch>
  );
}

export default App;
