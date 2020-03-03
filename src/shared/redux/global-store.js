import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './combined-reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(...[])
  // put any other store enhancers
)
const globalStore = createStore(rootReducer, enhancer)

export default globalStore
