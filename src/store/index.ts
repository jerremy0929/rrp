import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import peopleReducer from './reducers/people'
import placesReducer from './reducers/places'
import initState from './state'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  people: peopleReducer,
  places: placesReducer,
  router: connectRouter(history),
})

const composeEnhancers =
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools

const store = createStore(
  rootReducer,
  initState,
  composeEnhancers(applyMiddleware(routerMiddleware(history))),
)

export default store
