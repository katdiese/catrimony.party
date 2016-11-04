import Header from './src/header';

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

ReactDOM.render(
  <HomeListing />,
  document.getElementById('content')
);