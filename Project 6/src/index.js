import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import './index.css';
// import App from './App';
// import Input from './Input';
// import Todo from './Todo';
// import ObjectUseState from './ObjectUseState';
// import Country from './Country';
// import List from './List';
import ArrayUseState from './ArrayUseState';
// import Pizza from './Pizza'
// import Trip from './Trip'
// import Random from './Random User/Random';
// import Product from './Products/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ArrayUseState />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();