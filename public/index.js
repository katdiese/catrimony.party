var HomeListing = React.createClass({
  render() {
    return(
      <div>
        <Header />
        <h1>Meow</h1>
      </div>

      );
  }
});

var Header = React.createClass({
  render() {
    return(
      <div>
        <h1>Meow!!!!!</h1>
      </div>

      );
  }
});

ReactDOM.render(
  <HomeListing />,
  document.getElementById('content')
);