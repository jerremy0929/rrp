import { ADD_PERSON, DELETE_PERSON } from '../action-types/people'
import { addPersonAction, deletePersonAction } from '../actions/people'
import { IPerson } from '../../types'

export default (
  state: IPerson[] = [],
  action: addPersonAction | deletePersonAction,
) => {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        {
          firstName: action.firstName,
          lastName: action.lastName,
          occupation: action.occupation,
        },
      ]
    case DELETE_PERSON:
      return state.filter(
        person =>
          person.firstName !== action.firstName ||
          person.lastName !== action.lastName,
      )
    default:
      return state
  }
}
