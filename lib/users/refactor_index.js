'use strict';

import { exportUsers } from "./refactor_export";
import { importUsers } from "./refactor_import";

export const users = {
  import: importUsers,
  export: exportUsers
};
