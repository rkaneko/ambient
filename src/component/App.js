const React = require('react');
const {Component} = React;

const Header = require('./Header.js');

class App extends Component {
  render() {
    return [
      <Header key={0} />,
      <div key={1}>Hello</div>
    ];
  }
}

module.exports = App;
