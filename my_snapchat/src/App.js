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
import store from './store';
import { Provider } from 'react-redux'; 

function App() {
  const isLogged = store.getState().auth['logged'];
  console.log(isLogged)
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path='/register' component={Register} />
        <Route exact path='/connection' render={() => isLogged === true ? <Connection log={isLogged} /> : < Connection log={isLogged} />} />
      </Router>
    </Provider>
  );
}

export default App;
