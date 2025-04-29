'use strict';

import { checkKey } from "../utils/refactor_keyCheck";
import { post } from "../utils/refactor_post";

const accepted_keys = {
  required: [
    'data'
  ]
};

function importUsers(apiData, params, callback) {
  const checked = checkKey(params, accepted_keys);

  if (checked.valid === false) {
    return callback(new Error(checked.errmsg));
  }

  checked.keys.data = JSON.stringify(checked.keys.data);

  const body = Object.assign(
    checked.keys,
    {
      content: 'user',
      format: 'json'
    }
  );

  post(apiData, body, callback);
}
