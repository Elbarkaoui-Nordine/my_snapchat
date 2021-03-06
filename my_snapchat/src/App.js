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
import HomePage from './components/homepage/HomePage';
import Snap from './components/snap/Snap';
import FirstPage from './components/firstpage/FirstPage';
import store from './store';
import { Provider } from 'react-redux'; 
import { Redirect } from 'react-router-dom';
let token = localStorage.getItem('data');
console.log(token)
if(token){
  token = JSON.parse(token);
  store.dispatch({type: 'login_success', user: token});
}
function App() {
  const isLogged = store.getState().auth['logged'];
  console.log(isLogged)
  return (
    <Provider store={store}>
      <Router>
        <Navbar /> 
        <Route exact path='/'  render={() => isLogged === true ? <Redirect to='/home' /> : <FirstPage /> } />
        <Route exact path='/home'  render={() => isLogged === true ? <HomePage /> : <Redirect to='/' /> } />
        <Route exact path='/snap'  render={() => isLogged === true ? <Snap /> : <Redirect to='/' /> } />
        <Route exact path='/register'  render={() => isLogged === true ?  <Redirect to='/home' /> : <Register />}/>
        <Route exact path='/connection' render={() => isLogged === true ? <Redirect to='/home' /> : <Connection />} />
      </Router>
    </Provider>
  );
}

export default App;
