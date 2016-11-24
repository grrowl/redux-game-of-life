import scuttlebutt, {
  isGossipType, sortUpdate, UPDATE_ACTION, UPDATE_TIMESTAMP
} from 'redux-scuttlebutt'

import { RESET, RANDOM } from '../constants/ActionTypes'

export default function getFilterHistory() {
  var lastReset = [, -Infinity]

  return function filterHistory(update, index, state) {
    // if update is less than reset, and it's not the root action
    if (update !== lastReset
      && sortUpdate(update, lastReset) < 0
      && update[UPDATE_TIMESTAMP]
    ) {
      return false
    }

    if (update[UPDATE_ACTION]) {
      if (update[UPDATE_ACTION].type === RESET || update[UPDATE_ACTION].type === RANDOM) {
        lastReset = update
        return true
      }
    }

    return true
  }
}
