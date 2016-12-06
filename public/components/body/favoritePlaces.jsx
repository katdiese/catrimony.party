var React = require('react');

var FavoritePlaces = React.createClass({
  render() {
    return (
      <div className="favorite-places">
        <div className="info">
          <h2>Have Time to Explore CO?</h2>
          <a target="_blank" href="https://drive.google.com/open?id=1o6KoLEliyndmCoL-HSWf3wo-qlw&usp=sharing"><button>Check out our favorite spots</button></a>
        </div>
      </div>

    );
  }
});

module.exports = FavoritePlaces;