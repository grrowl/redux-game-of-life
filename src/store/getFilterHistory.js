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

// old-school exports so we can require it in browser or in node
var exports = module.exports = {};
exports.getFilterHistory = function getFilterHistory() {
  var lastReset = [0, 0]

  return function filterHistory(update, index, state) {
    // if update is less than reset, and it's not the root action
    if (update !== lastReset
      && update[UPDATE_TIMESTAMP] // don't trim bedrock values
      && update[UPDATE_TIMESTAMP] !== lastReset[UPDATE_TIMESTAMP] // don't trim the reset
      && sortUpdate(update, lastReset) < 0
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
