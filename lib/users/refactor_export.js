'use strict';

import { post } from "../utils/refactor_post";

export function exportUsers(apiData, callback) {
  const body = {
    content: 'user',
    format: 'json'
  };
  post(apiData, body, callback);
}
