var React = require('react');

var WeekendDetails = React.createClass({
  render() {
    return (
      <div className="container weekend-details">
        <h1 className="calligraphy">Weekend Details</h1>
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
          <p className="eight columns">The Ceremony begins at 3:30pm at Keystone Ranch. Resort shuttle can take you straight to the door. The reception will be held at the same location, directly following the ceremony.</p>
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