import { combineReducers } from 'redux';
import  authentification from './LoginReducer';

export default combineReducers({auth: authentification});
