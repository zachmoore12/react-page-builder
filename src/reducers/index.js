import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import { reducerName } from '.reducerFile';


export default combineReducers({
  routing: routerReducer,
  // reducerName: reducerName
});
