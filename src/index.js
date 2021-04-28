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
  {id: 0, name: 'White and Black', quan: 2},
  {id: 1, name: 'Red Knit', quan: 3},
  {id: 2, name: 'Born in the States', quan: 1},
] 

function reducer(state=initState, action) {
  if( action.type === 'add') {
      
    let copyState = [...state];
    copyState[0].quan++

    return copyState
  }
  else if( action.type === 'substract' ) {

    let copyState = [...state];

    copyState[0].quan--
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
