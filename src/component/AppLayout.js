// @flow
// @jsx h

const {h} = require('preact');

const Header = require('./Header.js');

const AppLayout = ({children, ...props}) => ( // eslint-disable-line no-unused-vars
  <div>
    <Header />    
    {children}
  </div>
);

module.exports = AppLayout;
