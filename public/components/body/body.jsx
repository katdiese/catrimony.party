var React = require('react');
var WeekendDetails = require('./weekendDetails');
var Travel = require('./travel');
var FavoritePlaces = require('./favoritePlaces');

var Body = React.createClass({
  render() {
    return (
      <div>
        <WeekendDetails />
        <Travel />
        <FavoritePlaces />
      </div>

    );
  }
});

module.exports = Body;