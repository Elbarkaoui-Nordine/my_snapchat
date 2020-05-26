import React from 'react';
import Navbar from './components/navbar/Navbar'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/register/Register';
import Connection from './components/connection/Connection';


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/register' component={Register} />
      <Route exact path='/connection' component={Connection} />
  </Router>
  );
}

export default App;
