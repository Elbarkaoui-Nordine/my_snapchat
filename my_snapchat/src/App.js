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
import store from './store';
import { Provider } from 'react-redux'; 
// faudel a avouer que ca servait a rien mais on va le faire quand meme
// faudel a avouer que ca servait a rien mais on va le faire quand meme
// faudel a avouer que ca servait a rien mais on va le faire quand meme
// faudel a avouer que ca servait a rien mais on va le faire quand meme
// faudel a avouer que ca servait a rien mais on va le faire quand meme
// faudel a avouer que ca servait a rien mais on va le faire quand meme
// faudel a avouer que ca servait a rien mais on va le faire quand meme

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
        <Route exact path='/'  render={() => isLogged === true ?   < HomePage /> : <Connection />} />
        <Route exact path='/register'  render={() => isLogged === true ? <HomePage /> : < Register />}/>
        <Route exact path='/connection' render={() => isLogged === true ? <HomePage /> : < Connection />} />
      </Router>
    </Provider>
  );
}

export default App;
