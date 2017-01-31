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
                <h4>Maid of Honor</h4>
                <p>
                  <strong>Kim Dieser</strong> has been Kathy’s big sister for literally as long as she can remember. She is the most loyal, reliable, thoughtful, and helpful person Kathy has ever met, and one of her personal heroes.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="four columns">
                <img className="party-img" src="/images/party/maids/katie.jpg" />
              </div>
              <div className="eight columns">
                <h4>Maid of Honor</h4>
                <p>
                  <strong>Katie Kissel</strong> is Kathy’s best friend from college, and has been one of the most important people in Kathy’s life. Katie is Kathy’s girl soul mate and has always been there when needed most. Their relationship has grown stronger despite the distance, not having lived in the same state since college.
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
                  <strong>Danielle Hall</strong> has been Kathy’s older sister a slightly shorter amount of time than Kim, but they have been close friends since high school. Dani is one of the funniest, most creative people Kathy has ever met and it has always inspired her to follow her own creative passions.
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
                  <strong>Kristin Straily</strong> is one of Kathy’s best friends in Colorado. The two met through Steve’s job (they still work together) and instantly bonded on how bad Steve can be with girls. Kristin is the only person that Kathy’s ever met that plays underwater hockey (until she met some of Kristin’s teammates, of course).
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
                  <strong>Elena Korolkova</strong> is another of Kathy’s best friends in Colorado. Kathy likes to think of their friendship as the one good thing that came out of working as a buyer at UNFI. Elena is probably the most hospitable person that Kathy has ever met and one of the warmest friends a person could have.
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
                  Brian Colonnese will be the easiest guy at the wedding to start a conversation with. For a good ice breaker, just ask him how he and Steve met. Friends since College.
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
                  Kelvin Dieser is the only guy to ever match Steve at his favorite board game. Unfortunately for the two of them, that means neither of them has ever won. Future brother in law.
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
                  Danielle Hall has been Kathy’s older sister a little shorter amount of time than Kim, but they have been close friends since high school. Dani is one of the funniest, most creative people Kathy has ever met and it has always inspired her to follow her own creative passions.
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
                  John Longo literally taught Steve everything he knows about snowboarding. To return the favor Steve taught Longo how to build a cabin. Friends since college.
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
                  Elena Korolkova is another of Kathy’s best friends in Colorado. Kathy likes to think of their friendship as the one good thing that came out of working as a buyer at UNFI. Elena is probably the most hospitable person that Kathy has ever met and one of the warmest friends a person could have.
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
            <p className="text-center">What's a wedding without a little "awwww!!!" These are Katie's gorgeous kids Gus and Charlie Kissel. Gus will walk as the ring bearer and Charlie (Kathy's goddaughter) will be the flower girl.</p>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = Vip;