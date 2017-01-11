var React = require('react');

var OurStory = React.createClass({
  render() {
    return (
      <div className="our-story" id="story">
        <h1 className="text-center calligraphy">Our Story</h1>
        <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1gdTxKs4HIDAjU1WfgLSW5pT0Jwd1nxPz53i2S0o2ELo&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' frameborder='0'></iframe>
      </div>

    );
  }
});

module.exports = OurStory;