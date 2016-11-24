// import scuttlebutt, {
//   isGossipType, sortUpdate, UPDATE_ACTION, UPDATE_TIMESTAMP
// } from 'redux-scuttlebutt'

const scuttlebutt = require('redux-scuttlebutt'),
  isGossipType = scuttlebutt.isGossipType,
  sortUpdate = scuttlebutt.sortUpdate,
  UPDATE_ACTION = scuttlebutt.UPDATE_ACTION,
  UPDATE_TIMESTAMP = scuttlebutt.UPDATE_TIMESTAMP

// import { RESET, RANDOM } from '../constants/ActionTypes'
const RESET = 'RESET', RANDOM = 'RANDOM'

module.exports = function getFilterHistory() {
  var lastReset = [undefined, -Infinity]

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
