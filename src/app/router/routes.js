// @flow
// @jsx h

const {h} = require('preact');

const TopPageContainer = require('../../component/TopPageContainer.js');

const loadInitData = require('../../app/usecase/top/loadInitData.js');

const routes = {
  'path': '',
  'children': [
    {
      'path': '',
      'action': async (context: any, params: any) => { // eslint-disable-line no-unused-vars
        const {entryItems} = await loadInitData();
        return {
          'component': (
            <TopPageContainer entryItems={entryItems} />
          )
        };
      }
    }
  ]
};

module.exports = routes;
