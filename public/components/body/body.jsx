var React = require('react');
var WeekendDetails = require('./WeekendDetails');
var Travel = require('./travel');

var Body = React.createClass({
  render() {
    return (
      <div>
        <WeekendDetails />
        <Travel />
      </div>

    );
  }
});

module.exports = Body;