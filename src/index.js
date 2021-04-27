import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore( () => { 
  return [
    {id: 0, name: 'White and Black', quan: 2},
    {id: 1, name: 'Red Knit', quan: 3},
    {id: 2, name: 'Born in the States', quan: 1},
  ] 
});


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root')
);

reportWebVitals();
