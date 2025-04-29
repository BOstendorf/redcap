'use strict';

import { checkKey } from "../utils/refactor_keyCheck";
import { post } from "../utils/refactor_post";

const accepted_keys = {
  required: [
    'records'
  ],
  optional: [
    'arm'
  ]
};

export function deleteRecords(apiData, params, callback) {
  const checked = checkKey(params, accepted_keys);

  if (checked.valid === false) {
    return callback(new Error(checked.errmsg));
  }

  const body = Object.assign(
    {
      content: 'record',
      format: 'csv',
      action: 'delete'
    },
    checked.keys
  );

  //what the fuck is this doing?
  body.records.forEach((record, index) => {
    body[`records[${index}]`] = record;
  });

  delete body.records;
  post(apiData, body, callback);
}
