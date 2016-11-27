var React = require('react');

var Travel = React.createClass({
  render() {
    return (
      <div className="container travel">
        <h1 className="calligraphy text-center">Getting Here</h1>
        <div className="row">
          <div className="four columns detail-element">
            <h4 className="text-center">By Plane</h4>
            <p>The closest and most convenient airport to the wedding location will be Denver International Airport. If you need to grab a hotel room the night after you arrive, or before you leave, <a href="http://www.flydenver.com/traveler_services/hotels">here</a> is a list to access those.</p>
          </div>
          <div className="four columns detail-element">
            <h4 className="text-center">By Shuttle</h4>
            <p>Our guests will have access to discounted transportation to Keystone Resort through <a href="http://www.coloradomountainexpress.com/">Colorado Mountain Express</a>. This is a shuttle that can pick up from Denver International airport and bring you directly to the resort. To access the discount, please contact CME and use the code <strong>GO4DIE</strong>. We highly encourage shuttle to and from DIA to avoid driving on the potentially snowy mountain roads, and this service also allows room for skiis/boards if you have them!</p>
          </div>
          <div className="four columns detail-element">
            <h4 className="text-center">While Here</h4>
            <p>Once at Keystone, getting around is easy. Free shuttle buses run daily throughout the Keystone Resort as well as surrounding ski areas. See <a href="http://www.keystoneresort.com/plan-a-vacation/transportation-schedule-and-parking.aspx#/GettingAround">here</a> to access schedules for Keystone, and <a href="http://summitcountyco.gov/586/Transit-Summit-Stage/?cmpid=ET7217064&cmpid=ET7878642_KY_REU_1_FY17">Check out these schedules</a> to explore summit county and the surrounding resorts.</p>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <h4 className="text-center">Staying Here</h4>
            <p>Discounted Lodging is available for our guests through Keystone Resort. To look at rates/availability, please visit <a href="https://gc.synxis.com/rez.aspx?Hotel=40076&Chain=6521&start=availresults&arrive=12/17/2017&depart=12/18/2017&adult=1&child=0&group=GO4DIE">this link</a>. This is a great option because you are right on the resort and won't have to worry about logistics.</p>
            <p>However, being that Keystone is a ski town, we also suggest that guests also look into <a href="https://www.airbnb.com/s/Keystone--CO--United-States?guests=2&place_id=ChIJg2V85yRXaocRYfovfYgMZ0M&checkin=12%2F16%2F2017&checkout=12%2F18%2F2017&ss_id=coc8kltt&source=bb&page=1&allow_override%5B%5D=&s_tag=8n6KaoZf">Air BNB</a> for a variety of lodging options to accomodate small and large groups at a reasonable cost, often times with access to a kitchen. A potential downside is Air BNB rentals may not be as convenient to public transportation, but Steve and I have not experienced that before. Just remember to keep that in mind when searching and booking.</p>
          </div>
          <div className="six columns">
            <h4 className="text-center">A word about altitude...</h4>
            <p>It is hard to anticipate how alitude will affect any specific person, but it is typically not too much of a problem. The air <strong>will</strong> be a bit thinner and drier up there, but believe us: you <strong>will</strong> survive, and be just fine. A little bit of chapstick and hand lotion, as well as a handy bottle of water, will go a long way.
            </p>
            <p>Please remember to stay adequately hydrated while out here, because you'll need to feel your best to keep partying! For more tips on dealing with altitude, check out <a href="http://www.denver.org/about-denver/denver-resources/high-altitude-tips/">Visit Denver</a>'s website.
            </p>
            <p>
              One more reminder: It will get cold! That sounds obvious, but we are serious. Please remember to dress appropriately to keep yourself comfortable and safe. One phrase we like to remember is "The heat is all in the sun." If the sun is out, there is a good chance that it will be warmer out. However, temperatures drop dramatically when it sets.
            </p>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = Travel;