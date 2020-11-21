import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './appRouter/appRouter';
import createReduxStore from './store';
import {Provider} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import './css/scss/blueprint.css'
import reportWebVitals from './reportWebVitals';
const store = createReduxStore();
console.log(store);
ReactDOM.render(
  <Provider store = {store}>
    <AppRouter />
  </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
