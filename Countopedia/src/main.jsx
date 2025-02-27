import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.jsx';
import Counter from './Counter.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div style={{backgroundColor: "black"}}>
    <Header></Header>
    <Counter></Counter>
  </div>
)
