// @flow
// @jsx h

import type {
  Node
} from 'react';

const {h} = require('preact');

const Header = require('./Header.js');

const AppLayout = ({children}: { children: Node | Node[] }) => (
  <div>
    <Header />
    {children}
  </div>
);

module.exports = AppLayout;
