require("./styles/css/style.css");
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header/header');
var Body = require('./components/body/body');

ReactDOM.render(
    <div>
      <Header />
      <Body />
    </div>,
    document.getElementById('app')
);

console.log('hello');