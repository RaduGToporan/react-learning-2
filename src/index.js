import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const myFirstElement =<h1>Hello React !!!</h1>
ReactDOM.render(
  myFirstElement, document.getElementById('root')
);
