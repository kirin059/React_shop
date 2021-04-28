import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// redux
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

// 1번째 reducer
let initState = [
  {id: 0, name: 'Nike shoes', quan: 0}
] 

function reducer(state=initState, action) {
  if ( action.type === 'addList') {

    let found = state.findIndex((a)=>{return a.id === action.payload.id})
      if(found >= 0) {
        let copyState = [...state];
        copyState[found].quan++
        return copyState
     } 
     else {
        let copyState = [...state];
         copyState.push(action.payload);
  
      return copyState
    }
  }
  else if( action.type === 'add') {
      
    let copyState = [...state];
    copyState[action.payload].quan++

    return copyState
  }
  else if( action.type === 'substract' ) {

    let copyState = [...state];

    copyState[action.payload].quan--
    return copyState

  }
  else {
    return state
  }
}

// 2번째 reducer

function reducer2(state=true, action) {
  if(action.type === 'close') {
    state = false;
    return state 
  }
  else {
    return state
  }
}

const store = createStore( combineReducers({reducer, reducer2}) );

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root')
);

reportWebVitals();
