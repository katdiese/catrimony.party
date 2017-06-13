var React = require('react');

var Nav = React.createClass({
  hideNav: function() {
    if(window.innerWidth > 600) {
      document.getElementById("hamburger").style.display = "none";
      document.getElementById("mobile-nav").style.display = "none";
      document.getElementById("close").style.display = "none";
    }
  },
  showNav: function() {
    if(window.innerWidth < 600) {
      document.getElementById("hamburger").style.display = "block";
    }
  },
  showClose: function() {
    document.getElementById("close").style.display = "block";
    document.getElementById("mobile-nav").style.display = "block";
    document.getElementById("hamburger").style.display = "none";
  },
  showHamburger: function() {
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("mobile-nav").style.display = "none";
  },
  componentDidMount() {
    this.hideNav();
    window.addEventListener("resize", this.hideNav);
    window.addEventListener("resize", this.showNav);
  },
  render() {
    return(
      <div>
        <nav className="nav">
        <img className="hamburger" id="hamburger" onClick={() => this.showClose()} src="/images/hamburger.png"/>
        <img className="close" id="close" onClick={() => this.showHamburger()} src="/images/close.png" />
          <a className="desk-nav" href="#weekend-deets">Details</a>
          <a className="desk-nav" href="#getting-here">Travel/Lodging</a>
          <a className="desk-nav" href="#story">Story</a>
          <a className="desk-nav" target="_blank" href="https://brittanyrenee.pixieset.com/kathysteve/">Gallery</a>
          <a className="desk-nav" target="_blank" href="https://www.newlywish.com/registry/catrimony">Registry</a>
          <a className="desk-nav" href="#vip">Party</a>
          <a className="desk-nav" href="mailto:kathyandsteve4ever@gmail.com">Contact Us!</a>
          <ul className="mobile-nav" id="mobile-nav">
            <li onClick={() => this.showHamburger()}><a href="#weekend-deets">Details</a></li>
            <li onClick={() => this.showHamburger()}><a href="#getting-here">Travel/Lodging</a></li>
            <li onClick={() => this.showHamburger()}><a href="#story">Story</a></li>
            <li onClick={() => this.showHamburger()}><a target="_blank" href="https://brittanyrenee.pixieset.com/kathysteve/">Gallery</a></li>
            <li onClick={() => this.showHamburger()}><a target="_blank" href="https://www.newlywish.com/registry/catrimony">Registry</a></li>
            <li onClick={() => this.showHamburger()}><a href="#vip">Party</a></li>
            <li onClick={() => this.showHamburger()}><a href="mailto:kathyandsteve4ever@gmail.com">Contact Us!</a></li>
          </ul>
        </nav>
      </div>

      );
  }
});

module.exports = Nav;