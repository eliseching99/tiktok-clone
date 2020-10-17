import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var style= {
  backgroundColor:'pink',
  color:'white',
  fontFamily:"Arial"
}

const title= React.createElement("h1",{id:"title",className:"header",style:style},'Hello World',)

ReactDOM.render(
  // title,document.getElementById("root")
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
