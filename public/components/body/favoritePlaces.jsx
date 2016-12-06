var React = require('react');

var FavoritePlaces = React.createClass({
  render() {
    return (
      <div className="favorite-places">
        <div className="info">
          <h2>Have Time to Explore CO?</h2>
          <h4><a target="_blank" href="https://drive.google.com/open?id=1o6KoLEliyndmCoL-HSWf3wo-qlw&usp=sharing">Check out our favorite spots</a></h4>
        </div>
      </div>

    );
  }
});

module.exports = FavoritePlaces;