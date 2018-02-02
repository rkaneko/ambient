const {h, render} = require('preact');
const queryString = require('query-string');

const history = require('./app/router/history.js');
const router = require('./app/router/router.js');

const AppLayout = require('./component/AppLayout.js');

let currentLocation = history.location;
const scrollPositionHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

async function onLocationChange(location, action) {
  scrollPositionHistory[currentLocation.key] = {
    'scrollX': window.pageXOffset,
    'scrollY': window.pageYOffset
  };

  if (action === 'PUSH') {
    delete scrollPositionHistory[location.key];
  }
  currentLocation = location;

  try {
    const route = await router.resolve({
      'pathname': location.pathname,
      'query': queryString.parse(location.search)
    });
    if (currentLocation.key !== location.key) {
      return;
    }

    if (route.redirect) {
      history.replace(route.redirect);
      return;
    }

    render(
      (
        <AppLayout>
          {route.component}
        </AppLayout>
      ),
      document.body
    );

    let scrollX = 0;
    let scrollY = 0;
    const pos = scrollPositionHistory[location.key];
    if (pos) {
      ({scrollX, scrollY} = pos);
    } else {
      const targetHash = location.hash.substr(1);
      if (targetHash) {
        const target = document.getElementsByTagName(targetHash);
        scrollY = window.pageYOffset + target.getBoundingClientRect().top;
      }
    }
    window.scroll(scrollX, scrollY);
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
}

const unlisten = history.listen(onLocationChange);
window.addEventListener('unload', () => {
  unlisten();
});
onLocationChange(currentLocation).then().
  catch();
