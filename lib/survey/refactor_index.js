'use strict';

import { exportLink } from "./refactor_exportLink";
import { exportParticipants } from "./refactor_exportParticipant";
import { exportQueueLink } from "./refactor_exportQueueLink";
import { exportReturnCode } from "./refactor_exportReturnCode";

export const survey = {
  exportLink: exportLink,
  exportParticipants: exportParticipants,
  exportQueueLink: exportQueueLink,
  exportReturnCode: exportReturnCode
}
