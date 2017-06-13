var React = require('react');
var WeekendDetails = require('./weekendDetails');
var Travel = require('./travel');
var FavoritePlaces = require('./favoritePlaces');
var OurStory = require('./ourStory');
var Vip = require('./vip');

var Body = React.createClass({
  render() {
    return (
      <div>
        <WeekendDetails />
        <OurStory />
        <Travel />
        <FavoritePlaces />
        <Vip />
      </div>

    );
  }
});

module.exports = Body;