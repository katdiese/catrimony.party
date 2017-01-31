var React = require('react');
var CountDown = require('./countDown');
var Nav = require('./nav');

var Header = React.createClass({
  render() {
    return(
      <div>
        <Nav />
        <div className="hero">
          <div className="hero-text">
            <h1 className="calligraphy">Holy Catrimony!</h1>
            <h4 className="calligraphy" >Steve and Kathy are getting married</h4>
            <h5 className="short-lines">December 17, 2017</h5>
            <h5 className="short-lines">Keystone, Colorado</h5>
            <h6 className="short-lines">Attire: Black Tie</h6>
            <h1 className="accents"> &#40; &#34; &#41; </h1>
          </div>
        </div>
        <CountDown />
      </div>

      );
  }
});

module.exports = Header;