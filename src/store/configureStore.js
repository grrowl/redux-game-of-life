import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'
import scuttlebutt from 'redux-scuttlebutt'

export default (initialState) => {
  const store = createStore(rootReducer, initialState,
    scuttlebutt(),
    window.devToolsExtension && window.devToolsExtension()
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
