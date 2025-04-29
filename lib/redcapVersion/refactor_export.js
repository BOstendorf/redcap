'use strict';

import { StringDecoder } from 'string_decoder';
import { post } from '../utils/refactor_post';

export function exportRedCapVersion(apiData, callback) {
  const body = {
    content: 'version',
    format: 'json'
  };

  post(apiData, body, (err, res) => {
    if (err) {
      return callback(err);
    }
    const decoder = new StringDecoder('utf8');
    return callback(null, decoder.write(res));
  })
}
