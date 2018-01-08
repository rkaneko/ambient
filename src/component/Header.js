// @flow
// @jsx h

type Props = {
};

const styles = require('./Header.css');

const {h} = require('preact');

const Header = (props: Props) => (// eslint-disable-line no-unused-vars
  <header>
    <nav className={styles.navigation}>
      <img className={styles.logo} src="/static/img/ambient-logo-128-128.png" alt="ambient logo" width="52" height="52" />
      <h1 className={styles.siteName}>ambient</h1>
      <p className={styles.siteDescription}>{'rkaneko\'s weblog'}</p>
    </nav>
  </header>
);

module.exports = Header;
