import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

 const myFirstElement =<p>Hello React !!!</p>
 const appContainer = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
     <App />
     {myFirstElement}
     {myFirstElement}
    <p>New Text</p> 
  </React.StrictMode>,
  appContainer
);