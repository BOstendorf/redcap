module.exports = function (utilRef) {
  const utils = utilRef;

  const keySet = {
    optional: [
      'returnFormat',
      'logtype',
      'user',
      'record',
      'dag',
      'beginTime',
      'endTime'
    ]
  }

  return function (params, callback) {
    callback = callback || params;
    let body = {
      content: 'log',
      format: 'json',
    }

    if (typeof params !== 'function') {
      let keys = utils.keyCheck (params, keySet);

      if (keys.valid === false) {
        return callback (new Error (keys.errmsg));
      }
      body = Object.assign (body, keys.keys);
    }

    utils.post (body, callback);
  }
}
