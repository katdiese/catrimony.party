var React = require('react');

var Nav = React.createClass({
  render() {
    return(
      <div>
        <nav className="nav">
        <img className="hamburger" src="/images/hamburger.png"/>
          <i className="fa fa-tree" aria-hidden="true"></i>
          <a href="#weekend-deets">
            Details
          </a>
          <a href="#getting-here">Getting Here</a>
          <a href="#story">Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#vip">VIP</a>
          <a target="_blank" href="https://www.newlywish.com/registry/catrimony">Registry</a>
        </nav>
      </div>

      );
  }
});

module.exports = Nav;