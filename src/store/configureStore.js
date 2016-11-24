import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from '../reducers'
import scuttlebutt from 'redux-scuttlebutt'

import { getFilterHistory } from './getFilterHistory'

export default (initialState) => {
  const store = createStore(rootReducer, initialState,
    compose(
      scuttlebutt({
        uri: `${window.location.protocol}//${window.location.host}`,
        dispatcherOptions: {
          filterHistory: getFilterHistory()
        }
      }),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
