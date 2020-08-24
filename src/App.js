import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './components'
import Resume from "./components/Resume"
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline/>
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
    </>
  );
}

export default App;
