import { createStore, combineReducers, compose } from 'redux'

import peopleReducer from './reducers/people'
import placesReducer from './reducers/places'
import initState from './state'

const rootReducer = combineReducers({
  people: peopleReducer,
  places: placesReducer,
})

const composeEnhancers =
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools

const store = createStore(rootReducer, initState, composeEnhancers())

export default store
