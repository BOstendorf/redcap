'use strict';

import { StringDecoder } from 'string_decoder';
import { checkKey } from '../utils/refactor_keyCheck';
import { post } from '../utils/refactor_post';

const accepted_keys = {
  required: [
    'record'
  ]
};

export function exportQueueLink(apiData, params, callback) {
  const checked = checkKey(params, accepted_keys);

  if (checked.valid === false) {
    return callback(new Error(checked.errmsg));
  }

  const body = Object.assign({
    content: 'surveyQueueLink'
  }, checked.keys);

  post(apiData, body, (err, res) => {
    if (err) {
      return callback(err);
    }
    const decoder = new StringDecoder('utf8');
    callback(null, decoder.write(res));
  });
}
