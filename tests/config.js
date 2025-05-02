'use strict';

var apiData = require('../lib/utils/getAPIData.js');

var host;

try {
  host = apiData.getHost();
} catch {
  host = "redcap.uits.iu.edu";
}

module.exports = {
  host: host,
  path: getPath(),
  token: getToken()
}
