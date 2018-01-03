// @flow
// @jsx h

type Props = {
};

const styles = require('./Header.css');

console.log(styles);

const {h} = require('preact');

const Header = (props: Props) => {
  return (
    <header>
      <nav class={styles.navigation}>
        <img class={styles.logo} src="/static/img/ambient-logo-128-128.png" alt="ambient logo" width="52" height="52" />
        <h1 class={styles.siteName}>ambient</h1>
        <p class={styles.siteDescription}>rkaneko's weblog</p>
      </nav>
    </header>
  );
};

module.exports = Header;
