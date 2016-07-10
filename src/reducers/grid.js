import { handleActions } from 'redux-actions'

import * as types from '../constants/ActionTypes'
import { makeGrid, makeBlankGrid } from '../lib/grid'
import { nextState, toggle } from '../lib/game'
import { randomizer } from '../lib/utils'

const GRID_SIZE = 30

// Initial state is a blank grid
const DEFAULT_STATE = makeBlankGrid(GRID_SIZE, GRID_SIZE)

const actionHandlers = {
  [types.TICK]: nextState,
  [types.RESET]: (state) =>
    makeBlankGrid(GRID_SIZE, GRID_SIZE),
  [types.RANDOM]: (state, { payload }) =>
    makeGrid(randomizer(payload.seed), GRID_SIZE),
  [types.TOGGLE]: (state, { payload }) =>
    toggle(payload.coordinates, payload.current, state)
}

export default handleActions(
  actionHandlers,
  DEFAULT_STATE
)
