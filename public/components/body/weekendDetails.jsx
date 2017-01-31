var React = require('react');

var WeekendDetails = React.createClass({
  render() {
    return (
      <div className="container weekend-details">
        <h1 className="calligraphy" id="weekend-deets">Weekend Details</h1>
        <div className="row detail-element">
          <h4>
            The party before the party (Welcome to Colorado!)
          </h4>
          <p className="eight columns">
            We'd like to spend as much time with all of you as humanly possible, and it would be our pleasure to buy you a drink and welcome you to Colorado. Details will be released as they become available.
          </p>
          <img className="three columns" src="/images/inxpot-sign.jpg" />
        </div>
        <div className="row detail-element">
          <h4>The Main Event</h4>
          <img className="three columns" src="/images/ranch-winter.jpg"/>
          <div className="eight columns">
            <ul className="wedding-details">
              <li><strong>Ceremony Start Time:</strong> 3:30PM MTN Standard Time</li>
              <li><strong>Location:</strong> Keystone Ranch</li>
                <ul>
                  <li><strong>Address:</strong> 1437 Co Rd 150, Keystone, CO 80435</li>
                  <li><a target="_blank" href="https://goo.gl/maps/7DP9KtR4FSp">Map</a></li>
                </ul>
              <li><strong>Attire:</strong> Black Tie</li>
                <ul>
                  <li>Ladies: Evening Gown or longer formal cocktail dress is appropriate, often accompanied by gloves and a wrap or stole.</li>
                  <li>Gentlemen: Tuxes, or most formal suit in possesion.</li>
                  <li><strong>***Please Note: </strong> It will be snowy, and cold. It is encouraged to wear winter boots to the event, and change footwear there. There will be a coat room available.</li>
                  <li><a target="_blank" href="https://en.wikipedia.org/wiki/Black_tie">More Information</a></li>
                </ul>
            </ul>
          </div>
        </div>
        <div className="row detail-element">
          <h4>The After Party (Don't be scared to win)</h4>
          <p className="eight columns">When the reception ends at 10pm, the party will continue on at 9280 tap house on the Keystone resort.</p>
          <img className="three columns" src="/images/9280-tap.jpg"/>
        </div>
      </div>

    );
  }
});

module.exports = WeekendDetails;