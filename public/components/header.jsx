var React = require('react');
var CountDown = require('./countDown');

var Header = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Meow!!!!</h1>
        <CountDown />
      </div>

      );
  }
});

module.exports = Header;