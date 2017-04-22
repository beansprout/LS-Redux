import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './App';
import './index.css';

//TOD Provider - tag? function? what that? Just convention tag for readability like semantic tags in HTML?
ReactDOM.render(
// create store here
 <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>, document.getElementById('root')
);

