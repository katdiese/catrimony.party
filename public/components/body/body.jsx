var React = require('react');
var WeekendDetails = require('./weekendDetails');
var Travel = require('./travel');
var FavoritePlaces = require('./favoritePlaces');
var OurStory = require('./ourStory');

var Body = React.createClass({
  render() {
    return (
      <div>
        <WeekendDetails />
        <Travel />
        <FavoritePlaces />
        <OurStory />
      </div>

    );
  }
});

module.exports = Body;