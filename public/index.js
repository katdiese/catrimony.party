require("./styles/css/style.css");
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header/header');

ReactDOM.render(
    <div>
      <Header />
    </div>,
    document.getElementById('app')
);

console.log('hello');