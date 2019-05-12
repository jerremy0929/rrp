import {
  ADD_PLACE,
  DELETE_PLACE,
  EDIT_PLACE,
  UPDATE_PLACE,
} from '../action-types/places'
import { placeActions } from '../actions/places'
import { IPlace } from '../../types'

export default (state: IPlace[] = [], action: placeActions) => {
  switch (action.type) {
    case ADD_PLACE:
      return [...state, { name: action.placeName }]
    case DELETE_PLACE:
      return state.filter(place => place.name !== action.placeName)
    case EDIT_PLACE:
      return state
    case UPDATE_PLACE:
      return state
    default:
      return state
  }
}
