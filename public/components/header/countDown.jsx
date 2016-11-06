var countdown = require('react-count-down');
var React = require('react');

var CountDown = React.createClass({
  render() {
    var OPTIONS = { endDate: '12/17/2017 3:30 PM', prefix: 'till Catrimony!' }
    return (
      <div>
        <countdown options={OPTIONS} />
      </div>
    );
  }
});

module.exports = CountDown;