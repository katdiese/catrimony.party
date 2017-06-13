var React = require('react');

var Vip = React.createClass({
  render() {
    return (
      <div className="vip" id="vip">
        <div className="row text-center container">
            <h1 className="calligraphy vip-title">VIP</h1>
            <p><em>A little background on the people we've chosen to stand with us at the ceremony.</em></p>
          </div>
        <div className="container">
          <div className="six columns">
            <div className="row">
              <div className="four columns">
                <img className="party-img" src="/images/party/maids/Kim.png" />
              </div>
              <div className="eight columns">
                <h4>Matron of Honor</h4>
                <p>
                  <strong>Kim</strong> has been Kathy’s big sister for literally longer than she can remember. She is the most loyal, reliable, thoughtful, and helpful person Kathy has ever met, and one of her personal heroes.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <img className="party-img" src="/images/party/maids/katie.jpg" />
              </div>
              <div className="eight columns">
                <h4>Matron of Honor</h4>
                <p>
                  <strong>Katie</strong> and Kathy have known each other since college, and she has been one of the most important people in Kathy’s life. Katie is Kathy’s girl soul mate and has always been there when needed most.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <img className="party-img" src="/images/party/maids/danielle.png" />
              </div>
              <div className="eight columns">
                <h4>Bridesmaid</h4>
                <p>
                  <strong>Danielle</strong> has been Kathy’s older sister a slightly shorter amount of time than Kim, but they have been close friends since high school.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <img className="party-img" src="/images/party/maids/kristin.png" />
              </div>
              <div className="eight columns">
                <h4>Bridesmaid</h4>
                <p>
                  <strong>Kristin</strong> is one of Kathy’s best friends in Colorado. Kathy met Kristin through Steve’s job (they still work together) and instantly bonded on how bad Steve can be with girls.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <img className="party-img" src="/images/party/maids/elena.png" />
              </div>
              <div className="eight columns">
                <h4>Bridesmaid</h4>
                <p>
                  <strong>Elena</strong> is another of Kathy’s best friends in Colorado. Kathy likes to think of their friendship as the one good thing that came out of working as a buyer at UNFI.
                </p>
              </div>
            </div>
          </div>
          <div className="six columns">
            <div className="row">
              <div className="four columns">
                <img className="party-img" src="/images/party/men/brian.png" />
              </div>
              <div className="eight columns">
                <h4>Best Man</h4>
                <p>
                  <strong>Brian</strong> will be the easiest guy at the wedding to start a conversation with. For a good ice breaker, just ask him how he and Steve met. Friends since College.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <img className="party-img" src="/images/party/men/kel.png" />
              </div>
              <div className="eight columns">
                <h4>Groomsman</h4>
                <p>
                  <strong>Kelvin</strong> is the only guy to ever match Steve at his favorite board game. Unfortunately for the two of them, that means neither of them has ever won. Future brother in law.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <img className="party-img" src="/images/party/men/mark.png" />
              </div>
              <div className="eight columns">
                <h4>Groomsman</h4>
                <p>
                  <strong>Mark</strong> and Steve have spent more hours studying together at UConn than fish spend in the water. Neither graduated with honors.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <img className="party-img" src="/images/party/men/longo.png" />
              </div>
              <div className="eight columns">
                <h4>Groomsman</h4>
                <p>
                  <strong>John</strong> literally taught Steve everything he knows about snowboarding. To return the favor Steve taught Longo how to build a cabin. Friends since college.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <img className="party-img" src="/images/party/men/Kyle.png" />
              </div>
              <div className="eight columns">
                <h4>Groomsman</h4>
                <p>
                  <strong>Kyle</strong> and Steve share all the simple hobbies together. Holidays, breweries, and marvel movies. Kyle moved out to Colorado a year after Steve and Kathy with his girlfriend Jen, but they have been friends since college.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row container">
          <div className="four offset-by-one columns">
            <img src="/images/party/kids.jpg" />
          </div>
          <div className="six columns">
            <p className="text-center">What's a wedding without a little "awwww!!!" These are Katie's gorgeous kids Gus and Charlie. Gus will walk as the ring bearer and Charlie (Kathy's goddaughter) will be the flower girl.</p>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = Vip;