var React = require('react');

var Nav = React.createClass({
  showClose: function() {
    document.getElementById("close").style.display = "block";
    document.getElementById("hamburger").style.display = "none";
  },
  showHamburger: function() {
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("close").style.display = "none";
  },
  render() {
    return(
      <div>
        <nav className="nav">
        <img className="hamburger" id="hamburger" onClick={() => this.showClose()} src="/images/hamburger.png"/>
        <img className="close" id="close" onClick={() => this.showHamburger()} src="/images/close.png" />
          <i className="fa fa-tree" aria-hidden="true"></i>
          <a className="desk-nav" href="#weekend-deets">
            Details
          </a>
          <a className="desk-nav" href="#getting-here">Getting Here</a>
          <a className="desk-nav" href="#story">Story</a>
          <a className="desk-nav" href="#gallery">Gallery</a>
          <a className="desk-nav" href="#vip">VIP</a>
          <a className="desk-nav" target="_blank" href="https://www.newlywish.com/registry/catrimony">Registry</a>
        </nav>
      </div>

      );
  }
});

module.exports = Nav;