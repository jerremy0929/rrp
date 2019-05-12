import {
  ADD_PLACE,
  DELETE_PLACE,
  EDIT_PLACE,
  UPDATE_PLACE,
} from '../action-types/places'

export type addPlaceAction = {
  type: typeof ADD_PLACE
  placeName: string
}

export type deletePlaceAction = {
  type: typeof DELETE_PLACE
  placeName: string
}

export type editPlaceAction = {
  type: typeof EDIT_PLACE
}

export type updatePlaceAction = {
  type: typeof UPDATE_PLACE
}

export type placeActions =
  | addPlaceAction
  | deletePlaceAction
  | editPlaceAction
  | updatePlaceAction

export const addPlace = (placeName: string) => ({
  placeName,
  type: ADD_PLACE,
})

export const deletePlace = (placeName: string) => ({
  placeName,
  type: DELETE_PLACE,
})

export const editPlace = () => {
  return { type: EDIT_PLACE }
}

export function updatePlace() {
  return { type: UPDATE_PLACE }
}
