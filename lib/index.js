'use strict';

var apiDataUtils = require('./utils/getAPIData.js');

module.exports = function(token, options) {
  if (token === undefined || token === "") {
    token = apiDataUtils.getToken();
  }

  if (options === undefined) {
    options = {};
  }

  if (options.host === undefined || options.host === "") {
    options.host = apiDataUtils.getHost();
  }

  if (options.path === undefined || options.path === "") {
    options.path = apiDataUtils.getPath();
  }

  var apiData = {
    token: token,
    host: options.host,
    path: options.path
  };
  var utils = require('./utils')(apiData);

  return {
    PACKAGE_VERSION: require('../package.json').version,
    arms: require('./arms')(utils),
    events: require('./events')(utils),
    instruments: require('./instruments')(utils),
    users: require('./users')(utils),
    metadata: require('./metadata')(utils),
    redcapVersion: require('./redcapVersion')(utils),
    projects: require('./projects')(utils),
    fieldNames: require('./fieldNames')(utils),
    files: require('./files')(utils),
    records: require('./records')(utils),
    reports: require('./reports')(utils),
    survey: require('./survey')(utils)
  }
};
