var React = require('react');
var WeekendDetails = require('./weekendDetails');
var Travel = require('./travel');
var FavoritePlaces = require('./favoritePlaces');
var OurStory = require('./ourStory');
var Gallery = require('./gallery');

var Body = React.createClass({
  render() {
    return (
      <div>
        <WeekendDetails />
        <Travel />
        <FavoritePlaces />
        <OurStory />
        <Gallery />
      </div>

    );
  }
});

module.exports = Body;