'use strict';

import { keyCheck } from "./refactor_keyCheck";
import { Date } from "./refactor_date";
import { post } from "./refactor_post";
import { postFileUpload } from "./refactor_postFileUpload";

export const utils = {
  post: post,
  postFileUpload: postFileUpload,
  keyCheck: keyCheck,
  date: Date
}
