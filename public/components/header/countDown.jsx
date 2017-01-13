var React = require('react');

var CountDown = React.createClass({
  getInitialState: function() {
    var timeRemaining = Date.parse('2017-12-17') - Date.parse(new Date());
    var sec = Math.floor((timeRemaining/1000) % 60 );
    var min = Math.floor((timeRemaining/1000/60) % 60);
    var h = Math.floor( timeRemaining/(1000*60*60) % 24 );
    var d = Math.floor( timeRemaining / ( 1000*60*60*24 ));
    return {
      time: timeRemaining,
      days: d,
      hours: h,
      minutes: min,
      seconds: sec
    }
  },
  countdownTimer: function(endtime){
    var timeRemaining = Date.parse(endtime) - Date.parse(new Date());
    var sec = Math.floor((timeRemaining/1000) % 60 );
    var min = Math.floor((timeRemaining/1000/60) % 60);
    var h = Math.floor( timeRemaining/(1000*60*60) % 24 );
    var d = Math.floor( timeRemaining / ( 1000*60*60*24 ));
    this.setState({
      seconds: sec,
      minutes: min,
      hours: h,
      days:  d
    })
  },
  render() {
    var self = this;
    if(this.state.time >= 0) {
    setInterval(function() {
      self.countdownTimer('2017-12-17')
    }, 1000)
    }
    return (
      <div>
        <h1>There are</h1>
        <h3>{ this.state.days } days, { this.state.hours } hours, { this.state.minutes } minutes, and { this.state.seconds } seconds</h3>
        <h1>Till the day of our wedding!!!</h1>
      </div>
    );
  }
});

module.exports = CountDown;