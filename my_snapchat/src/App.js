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


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/register' component={Register} />

  </Router>
  );
}

export default App;
