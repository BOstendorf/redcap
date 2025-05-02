'use strict';

function getHost () {
  var host = process.env.REDCAP_HOST;

  if (host === undefined) {
    throw "REDCAP_HOST missing from environment variables";
  }

  return host;
}

function getPath () {
  var path = process.env.REDCAP_API_PATH;

  if (path === undefined) {
    return "/api/";
  }
  return path;
}

function getToken () {
  var token = process.env.REDCAP_API_KEY;

  if (token === undefined) {
    token = process.env.REDCAP_API_TOKEN;
  }

  if (token === undefined) {
    throw "API token missing from environment variables";
  }

  return token;
}

module.exports = {
  getToken: getToken,
  getHost: getHost,
  getPath: getPath
}
