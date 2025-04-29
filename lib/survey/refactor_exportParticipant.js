'use strict';

import { checkKey } from "../utils/refactor_keyCheck";
import { post } from "../utils/refactor_post";

const accepted_keys = {
  required: [
    'instrument',
    'event'
  ]
};

export function exportParticipants(apiData, params, callback) {
  const checked = checkKey(params, accepted_keys);

  if (checked.valid === false) {
    return callback(new Error(checked.errmsg));
  }

  const body = Object.assign(
    {
      content: 'participantList',
      format: 'json'
    },
    checked.keys
  );

  post(apiData, body, callback);
}
