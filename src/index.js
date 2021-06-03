import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const myFirstElement =<p>Hello React !!!</p>
const appContainer = document.getElementById('root')
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map( (numbers) =>
  <li>{numbers}</li>
 )

ReactDOM.render(
  <React.StrictMode>
     <App />
     {myFirstElement}
     {myFirstElement}
    <p>New Text</p> 
    <ul>{listItems}</ul>
  </React.StrictMode>,
  appContainer
);