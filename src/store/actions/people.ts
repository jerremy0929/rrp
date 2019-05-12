import { ADD_PERSON, DELETE_PERSON } from '../action-types/people'

export type addPersonAction = {
  type: typeof ADD_PERSON
  firstName: string
  lastName: string
  occupation: string
}

export type deletePersonAction = {
  type: typeof DELETE_PERSON
  firstName: string
  lastName: string
}

export const addPerson = (
  firstName: string,
  lastName: string,
  occupation: string,
) => ({
  firstName,
  lastName,
  occupation,
  type: ADD_PERSON,
})

export const deletePerson = (firstName: string, lastName: string) => ({
  firstName,
  lastName,
  type: DELETE_PERSON,
})
