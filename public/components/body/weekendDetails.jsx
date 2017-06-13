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
          <div className="eight columns">
            <p>We know that the wedding day can go really quickly and so we want to dedicate as much time as possible to seeing you. We are hosting a welcome party, and we hope you can make it! The format here will be like an open house, so feel free to stay the whole time, or just stop by. We'd love to grab a drink with you and welcome you to Colorado.</p>
            <strong>Details:</strong>
            <ul>
              <li><strong>Date:</strong>&nbsp;Saturday, December 16th</li>
              <li><strong>Time:</strong>&nbsp;2pm - 5pm</li>
              <li><strong>Location:</strong>&nbsp;Private Address. The location will be included in your invite.</li>
              <li><strong>Formality:</strong>&nbsp;Informal</li>
              <li>Light appetizers and drinks served!</li>
            </ul>
          </div>
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
                  <li><a target="_blank" href="https://www.google.com/maps/dir/River+Run+Village,+Keystone,+CO/Keystone+Ranch,+1437+Co+Rd+150,+Keystone,+CO+80435/@39.6064411,-105.9743359,16.62z/am=t/data=!4m13!4m12!1m5!1m1!1s0x876a57351d8d16eb:0x6616a68ed9b7bcb7!2m2!1d-105.9431154!2d39.607185!1m5!1m1!1s0x876a59935cd93297:0x3db9b0557f3011d7!2m2!1d-105.9947147!2d39.5850255">Map</a>
                    <ul>
                      <li><strong>On Getting There:</strong>&nbsp;Navigating to Keystone Ranch can be somewhat tricky, as simply navigating on your phone may lead you to roads that are active for the golf course in the summer, but closed in the winter. We highly suggest that if you are driving yourself, give yourself some extra time to arrive, and that you take the directions in the map linked above.</li>
                      <li><strong>On-Resort transporation is provided!</strong>&nbsp;Keystone Resort conveniently offers free shuttling around the resort. For the wedding, a dedicated shuttle will be available for guests to get to and from the wedding. More information on this will be provided as it becomes available.</li>
                    </ul>
                  </li>
                </ul>
              <li><strong>Attire:</strong> Black Tie</li>
                <ul>
                  <li>Ladies: Evening Gown or formal cocktail dress is appropriate, often accompanied by gloves and a wrap or stole.</li>
                  <li>Gentlemen: Tuxes, or most formal suit in possesion.</li>
                  <li><strong>***Please Note: </strong> It will be snowy, and cold. It is encouraged to wear winter boots to the event, and change footwear there. There will be a coat room available.</li>
                  <li><a target="_blank" href="https://en.wikipedia.org/wiki/Black_tie">More Information</a></li>
                </ul>
              <li><strong>Children: </strong>We love kids. We (probably) love your kids. However, this event will be strictly adult. Hopefully you are happy about this, but if not, we hope you will forgive us - but we are not budging on this. You are welcome to bring your children to Keystone with you though! There are tons of family <a href="http://www.keystoneresort.com/activities/kidtopia.aspx?page=viewall">activities</a> that sound like a blast for kids. If you are interested in sharing a sitter, please contact us and we can help coordinate that! Here are some resources: </li>
                  <ul>
                    <li><a href="http://www.summitcove.com/area-info/business-partners/babysitters-in-summit-county/">Summit Cove Sitters</a></li>
                    <li><a href="http://www.resortsitters.com/">Resort Sitters</a></li>
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