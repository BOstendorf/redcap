'use strict';

import { checkKey } from "../utils/refactor_keyCheck";
import { post } from "../utils/refactor_post";

const accepted_keys = {
  required: [
    'report_id'
  ],
  optional: [
    'rawOrLabel',
    'rawOrLabelHeaders',
    'exportCheckboxLabel'
  ]
}

export function exportReports(apiData, params, callback) {
  const checked = checkKey(params,)

  if (checked.valid === false) {
    return callback(new Error(checked.errmsg));
  }

  const body = Object.assign(checked.keys, {
    content: 'report',
    format: 'json'
  });

  post(apiData, body, callback);
}
