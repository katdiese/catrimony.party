var React = require('react');
var CountDown = require('./countDown');

var Header = React.createClass({
  render() {
    return(
      <div className="hero">
        <div className="hero-text">
          <h1>Holy Catrimony!</h1>
          <h4>Steve and Kathy are getting married</h4>
          <h4>December 17, 2017</h4>
          <h4>Keystone, Colorado</h4>
          <CountDown />
        </div>
      </div>

      );
  }
});

module.exports = Header;